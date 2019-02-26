// Copyright 2015-2019 Parity Technologies (UK) Ltd.
// This file is part of Parity Ethereum.

// Parity Ethereum is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity Ethereum is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity Ethereum.  If not, see <http://www.gnu.org/licenses/>.

//! A service transactions contract checker.

use call_contract::{CallContract, RegistryInfo};
use types::ids::BlockId;
use types::transaction::{SignedTransaction, Action};
use ethabi::FunctionOutputDecoder;
use ethereum_types::Address;

use_contract!(service_transaction, "res/contracts/service_transaction.json");
use_contract!(service_destination_whitelist, "res/contracts/service_destination_whitelist.json");

const SERVICE_TRANSACTION_CONTRACT_REGISTRY_NAME: &'static str = "service_transaction_checker";
const SERVICE_CERTIFIED_WHITESLIT_CONTRACT_REGISTRY_NAME: &'static str = "service_destination_whitelist";

/// Service transactions checker.
#[derive(Default, Clone)]
pub struct ServiceTransactionChecker;

impl ServiceTransactionChecker {
	/// Checks if given address in tx is whitelisted to send service transactions.
	pub fn check<C: CallContract + RegistryInfo>(&self, client: &C, tx: &SignedTransaction) -> Result<bool, String> {
		let sender = tx.sender();
		// Skip checking the contract if the transaction does not have zero gas price
		if !tx.gas_price.is_zero() {
			return Result::Ok(false);
		}

		let to_address = match tx.action {
			Action::Create => Address::default(),
			Action::Call(address) => address,
		};
		self.check_address(client, sender, to_address)
	}

	/// Checks if given address is whitelisted to send service transactions.
	pub fn check_address<C: CallContract + RegistryInfo>(&self, client: &C, sender: Address, to: Address) -> Result<bool, String> {
		let certified = self.check_certified_address(client, sender)?;
		if !certified {
			return Result::Ok(false);
		}

		// error will sign that this functionality should not be taken into account
		let whitelist_allowed = self.check_whitelist_address(client, to).unwrap_or(true);
		if !whitelist_allowed {
			debug!(target: "txqueue", "Service destination whitelist contract refuses for {}. Break service transaction check", to);
		}

		Result::Ok(whitelist_allowed)
	}

	/// Calls certifier contract with 'certified(address)' function
	fn check_certified_address<C: CallContract + RegistryInfo>(&self, client: &C, sender: Address) -> Result<bool, String> {
		let contract_address = client.registry_address(SERVICE_TRANSACTION_CONTRACT_REGISTRY_NAME.to_owned(), BlockId::Latest)
			.ok_or_else(|| "contract is not configured")?;
		trace!(target: "txqueue", "Checking service transaction checker contract from {}", sender);
		let (data, decoder) = service_transaction::functions::certified::call(sender);
		let value = client.call_contract(BlockId::Latest, contract_address, data)?;
		decoder.decode(&value).map_err(|e| e.to_string())
	}

	/// Checks if a destination address is whitelisted to accept service transaction
	fn check_whitelist_address<C:CallContract + RegistryInfo>(&self, client: &C, to: Address) -> Result<bool, String> {
		let contract_address = client.registry_address(SERVICE_CERTIFIED_WHITESLIT_CONTRACT_REGISTRY_NAME.to_owned(), BlockId::Latest)
			.ok_or_else(|| "whitelist contract is not configured")?;
		let is_whitelist_active = self.check_whitelist_active(client, contract_address)?;
		if !is_whitelist_active {
			return Result::Ok(false);
		}

		self.check_whitelist_address_presence(client, contract_address, to)
	}

	/// Calls destination whitelist contract with 'whitelisted(address)' function
	fn check_whitelist_address_presence<C:CallContract + RegistryInfo>(&self, client: &C, whitelist_contract_address: Address, to: Address) -> Result<bool, String> {
		trace!(target: "txqueue", "Checking service destination whitelist contract for address {}", to);
		let (data, decoder) = service_destination_whitelist::functions::whitelisted::call(to);
		let value = client.call_contract(BlockId::Latest, whitelist_contract_address, data)?;
		decoder.decode(&value).map_err(|e| e.to_string())
	}

	/// Calls destination whitelist contract with 'activated()' function
	fn check_whitelist_active<C:CallContract + RegistryInfo>(&self, client: &C, whitelist_contract_address: Address) -> Result<bool, String> {
		trace!(target: "txqueue", "Checking service destination whitelist contract is active");
		let (data, decoder) = service_destination_whitelist::functions::activated::call();
		let value = client.call_contract(BlockId::Latest, whitelist_contract_address, data)?;
		decoder.decode(&value).map_err(|e| e.to_string())
	}
}
