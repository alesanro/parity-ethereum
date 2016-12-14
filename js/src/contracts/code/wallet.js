// Copyright 2015, 2016 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @version Solidity v0.4.6
 * @from https://github.com/ethcore/parity/blob/63137b15482344ff9df634c086abaabed452eadc/js/src/contracts/snippets/enhanced-wallet.sol
 * @date 09-Dec-2016 @ 16h00 UTC
 */
export const wallet = '0x6060604052346100005760405161041b38038061041b83398101604090815281516020830151918301519201915b604080517f696e697457616c6c657428616464726573735b5d2c75696e743235362c75696e81527f7432353629000000000000000000000000000000000000000000000000000000602080830191909152915190819003602501902084516000829052909173__WalletLibrary_________________________91600281019160049182010290819038829003903960006000600483016000866127105a03f45b505050505050505b610337806100e46000396000f36060604052361561006c5760e060020a60003504632f54bf6e81146101245780634123cb6b146101485780635237509314610167578063659010e714610186578063746c9171146101a5578063c2cf7326146101c4578063c41a360a146101eb578063f1736d8614610217575b6101225b60003411156100c15760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a161011e565b600036111561011e5773__WalletLibrary_________________________600160a060020a0316600036600060405160200152604051808383808284378201915050925050506020604051808303818560325a03f4156100005750505b5b5b565b005b3461000057610134600435610236565b604080519115158252519081900360200190f35b3461000057610155610297565b60408051918252519081900360200190f35b346100005761015561029d565b60408051918252519081900360200190f35b34610000576101556102a3565b60408051918252519081900360200190f35b34610000576101556102a9565b60408051918252519081900360200190f35b34610000576101346004356024356102af565b604080519115158252519081900360200190f35b34610000576101fb600435610311565b60408051600160a060020a039092168252519081900360200190f35b3461000057610155610331565b60408051918252519081900360200190f35b600073__WalletLibrary_________________________600160a060020a0316600036600060405160200152604051808383808284378201915050925050506020604051808303818560325a03f4156100005750506040515190505b919050565b60015481565b60045481565b60035481565b60005481565b600073__WalletLibrary_________________________600160a060020a0316600036600060405160200152604051808383808284378201915050925050506020604051808303818560325a03f4156100005750506040515190505b92915050565b6000600582600101610100811015610000570160005b505490505b919050565b6002548156';
export const walletLibrary = '0x606060405234610000575b611381806100186000396000f3606060405236156100da5760e060020a6000350463173825d981146100df5780632f54bf6e146100f157806352375093146101155780635c52c2f514610134578063659010e7146101435780637065cb4814610162578063797af627146101745780639da5e0eb14610198578063b20d30a9146101aa578063b61d27f6146101bc578063b75c7dc614610227578063ba51a6df14610239578063c2cf73261461024b578063c57c5f6014610272578063cbf0b0c0146102c6578063e46dcfeb146102d8578063f00d4b5d14610331578063f1736d8614610346575b610000565b34610000576100ef600435610365565b005b3461000057610101600435610452565b604080519115158252519081900360200190f35b3461000057610122610473565b60408051918252519081900360200190f35b34610000576100ef610479565b005b34610000576101226104b0565b60408051918252519081900360200190f35b34610000576100ef6004356104b6565b005b34610000576101016004356105a5565b604080519115158252519081900360200190f35b34610000576100ef60043561081e565b005b34610000576100ef600435610832565b005b3461000057604080516020600460443581810135601f810184900484028501840190955284845261010194823594602480359560649492939190920191819084018382808284375094965061086a95505050505050565b604080519115158252519081900360200190f35b34610000576100ef600435610bcc565b005b34610000576100ef600435610c77565b005b3461000057610101600435602435610cf9565b604080519115158252519081900360200190f35b34610000576100ef6004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496505093359350610d4e92505050565b005b34610000576100ef600435610e13565b005b34610000576100ef60048080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965050843594602001359350610e5192505050565b005b34610000576100ef600435602435610e6a565b005b3461000057610122610f63565b60408051918252519081900360200190f35b600060003660405180838380828437820191505092505050604051809103902061038e81610f69565b1561044b57600160a060020a0383166000908152610105602052604090205491508115156103bb5761044b565b60016001540360005411156103cf5761044b565b6000600583610100811015610000570160005b5055600160a060020a03831660009081526101056020526040812055610406611108565b61040e6111dc565b60408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b5b5b505050565b600160a060020a03811660009081526101056020526040812054115b919050565b60045481565b6000366040518083838082843782019150509250505060405180910390206104a081610f69565b156104ab5760006003555b5b5b50565b60035481565b6000366040518083838082843782019150509250505060405180910390206104dd81610f69565b1561059f576104eb82610452565b156104f55761059f565b6104fd611108565b60015460fa9010610510576105106111dc565b5b60015460fa90106105215761059f565b60018054810190819055600160a060020a03831690600590610100811015610000570160005b5055600154600160a060020a03831660008181526101056020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a15b5b5b5050565b6000816105b181610f69565b156108155760008381526101086020526040902054600160a060020a0316156108155760008381526101086020526040908190208054600180830154935160029384018054600160a060020a0390941695949093919283928592918116156101000260001901160480156106665780601f1061063b57610100808354040283529160200191610666565b820191906000526020600020905b81548152906001019060200180831161064957829003601f168201915b505091505060006040518083038185876185025a03f15050506000848152610108602090815260409182902060018082015482548551600160a060020a033381811683529682018c905296810183905295166060860181905260a06080870181815260029586018054958616156101000260001901909516959095049087018190527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a975094958a95929491939290919060c08301908490801561076b5780601f106107405761010080835404028352916020019161076b565b820191906000526020600020905b81548152906001019060200180831161074e57829003601f168201915b5050965050505050505060405180910390a1600083815261010860205260408120805473ffffffffffffffffffffffffffffffffffffffff19168155600180820183905560028083018054858255939493909281161561010002600019011604601f8190106107da575061080c565b601f01602090049060005260206000209081019061080c91905b8082111561080857600081556001016107f4565b5090565b5b505050600191505b5b5b5b50919050565b600281905561082b61130b565b6004555b50565b60003660405180838380828437820191505092505050604051809103902061085981610f69565b1561059f5760028290555b5b5b5050565b6000600061087733610452565b15610bc05761088584611315565b156109bc577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004338587866040518085600160a060020a0316815260200184815260200183600160a060020a03168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156109335780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a184600160a060020a03168484604051808280519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561099c5780820380516001836020036101000a031916815260200191505b5091505060006040518083038185876185025a03f1925050509150610bc0565b600036436040518084848082843782019150508281526020019350505050604051809103902090506109ed816105a5565b158015610a10575060008181526101086020526040902054600160a060020a0316155b15610bc057600081815261010860209081526040822080546c01000000000000000000000000808a020473ffffffffffffffffffffffffffffffffffffffff199091161781556001808201889055865160029283018054818752958590209095601f9381161561010002600019011693909304820184900483019390929190880190839010610aaa57805160ff1916838001178555610ad7565b82800160010185558215610ad7579182015b82811115610ad7578251825591602001919060010190610abc565b5b50610af89291505b8082111561080857600081556001016107f4565b5090565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf328133868887604051808660001916815260200185600160a060020a0316815260200184815260200183600160a060020a03168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610bae5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b5b5b5b5b509392505050565b600160a060020a033316600090815261010560205260408120549080821515610bf457610c70565b50506000828152610106602052604081206001810154600284900a929083161115610c705780546001908101825581018054839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b5b50505050565b600036604051808383808284378201915050925050506040518091039020610c9e81610f69565b1561059f57600154821115610cb25761059f565b6000829055610cbf611108565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15b5b5b5050565b600082815261010660209081526040808320600160a060020a038516845261010590925282205482811515610d315760009350610d45565b8160020a9050808360010154166000141593505b50505092915050565b815160019081019055600033600160a060020a03166006825b505550600160a060020a033316600090815261010560205260408120600190558181555b825181101561044b57828181518110156100005790602001906020020151600160a060020a0316600582600201610100811015610000570160005b5081905550806002016101056000858481518110156100005790602001906020020151600160a060020a03168152602001908152602001600020819055505b600101610d8b565b5b505050565b600036604051808383808284378201915050925050506040518091039020610e3a81610f69565b1561059f5781600160a060020a0316ff5b5b5b5050565b610e5b8383610d4e565b61044b8161081e565b5b505050565b6000600036604051808383808284378201915050925050506040518091039020610e9381610f69565b15610c7057610ea183610452565b15610eab57610c70565b600160a060020a038416600090815261010560205260409020549150811515610ed357610c70565b610edb611108565b82600160a060020a0316600583610100811015610000570160005b5055600160a060020a0380851660008181526101056020908152604080832083905593871680835291849020869055835192835282015281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a15b5b5b50505050565b60025481565b600160a060020a033316600090815261010560205260408120548180821515610f91576110fe565b60008581526101066020526040902080549092501515611025576000805483556001808401919091556101078054918201808255828015829011610ffa57600083815260209020610ffa9181019083015b8082111561080857600081556001016107f4565b5090565b5b50505060028301819055610107805487929081101561000057906000526020600020900160005b50555b8260020a905080826001015416600014156110fe5760408051600160a060020a03331681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a18154600190116110eb5760008581526101066020526040902060020154610107805490919081101561000057906000526020600020900160005b5060009081905585815261010660205260408120818155600180820183905560029091019190915593506110fe566110fe565b8154600019018255600182018054821790555b5b5b505050919050565b6101075460005b818110156111855761010781815481101561000057906000526020600020900160005b50541561117c57610106600061010783815481101561000057906000526020600020900160005b505481526020810191909152604001600090812081815560018101829055600201555b5b60010161110f565b610107805460008083559190915261044b907f47c4908e245f386bfc1825973249847f4053a761ddb4880ad63c323a7b5a2a25908101905b8082111561080857600081556001016107f4565b5090565b5b505b5050565b60015b6001548110156104ab575b6001548110801561120c5750600581610100811015610000570160005b505415155b15611219576001016111ea565b5b600160015411801561123e57506005600154610100811015610000570160005b5054155b15611252576001805460001901905561121a565b6001548110801561127657506005600154610100811015610000570160005b505415155b80156112925750600581610100811015610000570160005b5054155b15611302576005600154610100811015610000570160005b5054600582610100811015610000570160005b5055806101056000600583610100811015610000570160005b505481526020019081526020016000208190555060006005600154610100811015610000570160005b50555b6111df565b5b50565b6201518042045b90565b600061132033610452565b1561046e5760045461133061130b565b111561134757600060035561134361130b565b6004555b600354828101108015906113615750600254826003540111155b1561137657506003805482019055600161046e565b5060005b5b5b91905056';
export const walletSourceURL = 'https://github.com/ethcore/parity/blob/63137b15482344ff9df634c086abaabed452eadc/js/src/contracts/snippets/enhanced-wallet.sol';
export const walletLibraryRegKey = 'walletLibrary';

// Used if no Wallet Library found in registry...
// Compiled from `wallet.sol` using Solidity v0.4.6
export const fullWalletCode = '0x606060405234610000576040516113bb3803806113bb83398101604090815281516020830151918301519201915b805b83835b815160019081019055600033600160a060020a03166003825b505550600160a060020a033316600090815261010260205260408120600190555b82518110156100ee57828181518110156100005790602001906020020151600160a060020a0316600282600201610100811015610000570160005b5081905550806002016101026000858481518110156100005790602001906020020151600160a060020a03168152602001908152602001600020819055505b60010161006c565b60008290555b50505061010581905561011264010000000061127861012182021704565b610107555b505b50505061012b565b6201518042045b90565b611282806101396000396000f3606060405236156100da5760e060020a6000350463173825d981146101305780632f54bf6e146101425780634123cb6b1461016657806352375093146101855780635c52c2f5146101a4578063659010e7146101b35780637065cb48146101d2578063746c9171146101e4578063797af62714610203578063b20d30a914610227578063b61d27f614610239578063b75c7dc61461026b578063ba51a6df1461027d578063c2cf73261461028f578063c41a360a146102b6578063cbf0b0c0146102e2578063f00d4b5d146102f4578063f1736d8614610309575b61012e5b600034111561012b5760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b5b565b005b346100005761012e600435610328565b005b3461000057610152600435610415565b604080519115158252519081900360200190f35b3461000057610173610436565b60408051918252519081900360200190f35b346100005761017361043c565b60408051918252519081900360200190f35b346100005761012e610443565b005b346100005761017361047b565b60408051918252519081900360200190f35b346100005761012e600435610482565b005b3461000057610173610571565b60408051918252519081900360200190f35b3461000057610152600435610577565b604080519115158252519081900360200190f35b346100005761012e6004356107e3565b005b34610000576101736004803590602480359160443591820191013561081c565b60408051918252519081900360200190f35b346100005761012e600435610ab3565b005b346100005761012e600435610b5e565b005b3461000057610152600435602435610be0565b604080519115158252519081900360200190f35b34610000576102c6600435610c35565b60408051600160a060020a039092168252519081900360200190f35b346100005761012e600435610c55565b005b346100005761012e600435602435610c93565b005b3461000057610173610d8c565b60408051918252519081900360200190f35b600060003660405180838380828437820191505092505050604051809103902061035181610d93565b1561040e57600160a060020a03831660009081526101026020526040902054915081151561037e5761040e565b60016001540360005411156103925761040e565b6000600283610100811015610000570160005b5055600160a060020a038316600090815261010260205260408120556103c9610f32565b6103d1611002565b60408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b5b5b505050565b600160a060020a03811660009081526101026020526040812054115b919050565b60015481565b6101075481565b60003660405180838380828437820191505092505050604051809103902061046a81610d93565b15610476576000610106555b5b5b50565b6101065481565b6000366040518083838082843782019150509250505060405180910390206104a981610d93565b1561056b576104b782610415565b156104c15761056b565b6104c9610f32565b60015460fa90106104dc576104dc611002565b5b60015460fa90106104ed5761056b565b60018054810190819055600160a060020a03831690600290610100811015610000570160005b5055600154600160a060020a03831660008181526101026020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a15b5b5b5050565b60005481565b60008161058381610d93565b156107da5760008381526101086020526040902054600160a060020a0316156107da5760008381526101086020526040908190208054600180830154935160029384018054600160a060020a0390941695949093919283928592918116156101000260001901160480156106385780601f1061060d57610100808354040283529160200191610638565b820191906000526020600020905b81548152906001019060200180831161061b57829003601f168201915b505091505060006040518083038185876185025a03f15050506000848152610108602090815260409182902060018082015482548551600160a060020a033381811683529682018c905296810183905295166060860181905260a06080870181815260029586018054958616156101000260001901909516959095049087018190527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a975094958a95929491939290919060c08301908490801561073d5780601f106107125761010080835404028352916020019161073d565b820191906000526020600020905b81548152906001019060200180831161072057829003601f168201915b5050965050505050505060405180910390a16000838152610108602052604081208054600160a060020a0319168155600180820183905560028083018054858255939493909281161561010002600019011604601f81901061079f57506107d1565b601f0160209004906000526020600020908101906107d191905b808211156107cd57600081556001016107b9565b5090565b5b505050600191505b5b5b5b50919050565b60003660405180838380828437820191505092505050604051809103902061080a81610d93565b1561056b576101058290555b5b5b5050565b600061082733610415565b15610aa85761083584611131565b156108f3577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd00433858786866040518086600160a060020a0316815260200185815260200184600160a060020a0316815260200180602001828103825284848281815260200192508082843760405192018290039850909650505050505050a184600160a060020a03168484846040518083838082843782019150509250505060006040518083038185876185025a03f15060009350610aa892505050565b6000364360405180848480828437820191505082815260200193505050506040518091039020905061092481610577565b158015610947575060008181526101086020526040902054600160a060020a0316155b15610aa857600081815261010860209081526040822080546c01000000000000000000000000808a0204600160a060020a0319909116178155600180820188905560029182018054818652948490209094601f928116156101000260001901169290920481019290920481019185919087908390106109d15782800160ff198235161785556109fe565b828001600101855582156109fe579182015b828111156109fe5782358255916020019190600101906109e3565b5b50610a1f9291505b808211156107cd57600081556001016107b9565b5090565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32813386888787604051808760001916815260200186600160a060020a0316815260200185815260200184600160a060020a031681526020018060200182810382528484828181526020019250808284376040519201829003995090975050505050505050a15b5b5b5b949350505050565b600160a060020a033316600090815261010260205260408120549080821515610adb57610b57565b50506000828152610103602052604081206001810154600284900a929083161115610b575780546001908101825581018054839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b5b50505050565b600036604051808383808284378201915050925050506040518091039020610b8581610d93565b1561056b57600154821115610b995761056b565b6000829055610ba6610f32565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15b5b5b5050565b600082815261010360209081526040808320600160a060020a038516845261010290925282205482811515610c185760009350610c2c565b8160020a9050808360010154166000141593505b50505092915050565b6000600282600101610100811015610000570160005b505490505b919050565b600036604051808383808284378201915050925050506040518091039020610c7c81610d93565b1561056b5781600160a060020a0316ff5b5b5b5050565b6000600036604051808383808284378201915050925050506040518091039020610cbc81610d93565b15610b5757610cca83610415565b15610cd457610b57565b600160a060020a038416600090815261010260205260409020549150811515610cfc57610b57565b610d04610f32565b82600160a060020a0316600283610100811015610000570160005b5055600160a060020a0380851660008181526101026020908152604080832083905593871680835291849020869055835192835282015281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a15b5b5b50505050565b6101055481565b600160a060020a033316600090815261010260205260408120548180821515610dbb57610f28565b60008581526101036020526040902080549092501515610e4f576000805483556001808401919091556101048054918201808255828015829011610e2457600083815260209020610e249181019083015b808211156107cd57600081556001016107b9565b5090565b5b50505060028301819055610104805487929081101561000057906000526020600020900160005b50555b8260020a90508082600101541660001415610f285760408051600160a060020a03331681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a1815460019011610f155760008581526101036020526040902060020154610104805490919081101561000057906000526020600020900160005b506000908190558581526101036020526040812081815560018082018390556002909101919091559350610f2856610f28565b8154600019018255600182018054821790555b5b5b505050919050565b6101045460005b81811015610ff557610108600061010483815481101561000057906000526020600020900160005b50548152602081019190915260400160009081208054600160a060020a0319168155600180820183905560028083018054858255939493909281161561010002600019011604601f819010610fb65750610fe8565b601f016020900490600052602060002090810190610fe891905b808211156107cd57600081556001016107b9565b5090565b5b5050505b600101610f39565b61056b6111a4565b5b5050565b60015b600154811015610476575b600154811080156110325750600281610100811015610000570160005b505415155b1561103f57600101611010565b5b600160015411801561106457506002600154610100811015610000570160005b5054155b156110785760018054600019019055611040565b6001548110801561109c57506002600154610100811015610000570160005b505415155b80156110b85750600281610100811015610000570160005b5054155b15611128576002600154610100811015610000570160005b5054600282610100811015610000570160005b5055806101026000600283610100811015610000570160005b505481526020019081526020016000208190555060006002600154610100811015610000570160005b50555b611005565b5b50565b600061113c33610415565b15610431576101075461114d611278565b111561116657600061010655611161611278565b610107555b610106548281011080159061118357506101055482610106540111155b1561119957506101068054820190556001610431565b5060005b5b5b919050565b6101045460005b818110156112215761010481815481101561000057906000526020600020900160005b50541561121857610103600061010483815481101561000057906000526020600020900160005b505481526020810191909152604001600090812081815560018101829055600201555b5b6001016111ab565b610104805460008083559190915261040e907f4c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe908101905b808211156107cd57600081556001016107b9565b5090565b5b505b5050565b6201518042045b9056';
