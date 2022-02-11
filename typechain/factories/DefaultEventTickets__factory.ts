/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DefaultEventTickets,
  DefaultEventTicketsInterface,
} from "../DefaultEventTickets";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalTickets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ticketPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTickets",
        type: "uint256",
      },
    ],
    name: "LogBuyTickets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "LogEndSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "accountRefunded",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTickets",
        type: "uint256",
      },
    ],
    name: "LogGetRefund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "buyTickets",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x59217132",
        type: "bytes32",
      },
    ],
    name: "c_0x59217132",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "endSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "getBuyerTicketCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "toRefund",
        type: "uint256",
      },
    ],
    name: "getRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readEvent",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "website",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalTickets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sales",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a1038038062002a10833981810160405281019062000037919062000814565b620000576200004b6200037e60201b60201c565b6200038660201b60201c565b6200008b7f3f9de1313e13b39d11eed7a28872995c83212035209211ecd2290e2f124d9ce760001b6200044a60201b60201c565b620000bf7f4b84bc36bee472def92114e3fe47d66b7a4389707b91323fc7ee2378d558e07860001b6200044a60201b60201c565b620000f37fb57afe0870d269dd7e61dff67d93164e54d332c8d472fbc2b368bb8037a22f6960001b6200044a60201b60201c565b62000104336200044d60201b60201c565b620001387f858f20ebacb9b987155630d5256e44e0c356d584660fd86d420006f04f99415760001b6200044a60201b60201c565b6200016c7fbe469eda01449a0ac73a4ddfb3dd67c52fd77cf046b93b2c16a0d50fe1470ed560001b6200044a60201b60201c565b8360016000019080519060200190620001879291906200058c565b50620001bc7f5bc5c8034c5f4173a91fe89518101a41566fc7ee72f0931c6e1f3d075333bb1460001b6200044a60201b60201c565b620001f07f99e8a4acd537d28fadc4238d0d030e59a5ea4967c1776a3db2a0a7dbcda5afc760001b6200044a60201b60201c565b826001800190805190602001906200020a9291906200058c565b506200023f7fd2cfced0191f39bc82e291053bcd1c5c45858edf454a6f1ad4cee2eddf2b62f060001b6200044a60201b60201c565b620002737f16f60eb210d4004916c525fec20edb444be3597e3a2164478427c5e78391f12960001b6200044a60201b60201c565b81600160020181905550620002b17f75ca7f5e6d47e972e6e204894d743d507e4b1d10a3b7212fba6580cfb4824c8560001b6200044a60201b60201c565b620002e57f9215b00e01e584cd227c3d3d0a8ab91b1d546d825b0863068bfd474aa14f1f1260001b6200044a60201b60201c565b80600160040181905550620003237fbd971c82f1e58212aa35b7c04c97d09bc2a45eec3ab93a455d964cf91de05e7860001b6200044a60201b60201c565b620003577f985e032f94dc28df123d5965345d93e22d20e4c7186dac7d8203f400c640e59660001b6200044a60201b60201c565b60018060060160006101000a81548160ff0219169083151502179055505050505062000a44565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b6200045d6200037e60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620004836200056360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620004dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004d39062000925565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200054f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200054690620009bd565b60405180910390fd5b62000560816200038660201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8280546200059a9062000a0e565b90600052602060002090601f016020900481019282620005be57600085556200060a565b82601f10620005d957805160ff19168380011785556200060a565b828001600101855582156200060a579182015b8281111562000609578251825591602001919060010190620005ec565b5b5090506200061991906200061d565b5090565b5b80821115620006385760008160009055506001016200061e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620006a5826200065a565b810181811067ffffffffffffffff82111715620006c757620006c66200066b565b5b80604052505050565b6000620006dc6200063c565b9050620006ea82826200069a565b919050565b600067ffffffffffffffff8211156200070d576200070c6200066b565b5b62000718826200065a565b9050602081019050919050565b60005b838110156200074557808201518184015260208101905062000728565b8381111562000755576000848401525b50505050565b6000620007726200076c84620006ef565b620006d0565b90508281526020810184848401111562000791576200079062000655565b5b6200079e84828562000725565b509392505050565b600082601f830112620007be57620007bd62000650565b5b8151620007d08482602086016200075b565b91505092915050565b6000819050919050565b620007ee81620007d9565b8114620007fa57600080fd5b50565b6000815190506200080e81620007e3565b92915050565b6000806000806080858703121562000831576200083062000646565b5b600085015167ffffffffffffffff8111156200085257620008516200064b565b5b6200086087828801620007a6565b945050602085015167ffffffffffffffff8111156200088457620008836200064b565b5b6200089287828801620007a6565b9350506040620008a587828801620007fd565b9250506060620008b887828801620007fd565b91505092959194509250565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006200090d602083620008c4565b91506200091a82620008d5565b602082019050919050565b600060208201905081810360008301526200094081620008fe565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000620009a5602683620008c4565b9150620009b28262000947565b604082019050919050565b60006020820190508181036000830152620009d88162000996565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a2757607f821691505b6020821081141562000a3e5762000a3d620009df565b5b50919050565b611fbc8062000a546000396000f3fe6080604052600436106100865760003560e01c8063715018a611610059578063715018a6146101165780638da5cb5b1461012d578063d2f0be9914610158578063edfb916714610181578063f2fde38b146101be57610086565b806305aea97c1461008b5780632f366637146100ba578063380d831b146100d657806365f07965146100ed575b600080fd5b34801561009757600080fd5b506100a06101e7565b6040516100b19594939291906117ff565b60405180910390f35b6100d460048036038101906100cf9190611891565b6103c4565b005b3480156100e257600080fd5b506100eb610b07565b005b3480156100f957600080fd5b50610114600480360381019061010f91906118f4565b610dd8565b005b34801561012257600080fd5b5061012b610ddb565b005b34801561013957600080fd5b50610142610e63565b60405161014f9190611962565b60405180910390f35b34801561016457600080fd5b5061017f600480360381019061017a9190611891565b610e8c565b005b34801561018d57600080fd5b506101a860048036038101906101a391906119a9565b61149e565b6040516101b591906119d6565b60405180910390f35b3480156101ca57600080fd5b506101e560048036038101906101e091906119a9565b61156e565b005b606080600080600061021b7f119e3fbaa83b344f6433d7af902d7bf7f26a7cb64036baee6771a603fa2c890d60001b610dd8565b6102477f7d005206afa9ba8dc5058e745b56085abb98056c2cdfd236fdd1ad067e6e9a3060001b610dd8565b6102737f44e89a9079b547e6d140850088eb2247ad62fae5d36501e1cda0f18d05d42c9c60001b610dd8565b600160000160018001600160020154600160030154600160060160009054906101000a900460ff168480546102a790611a20565b80601f01602080910402602001604051908101604052809291908181526020018280546102d390611a20565b80156103205780601f106102f557610100808354040283529160200191610320565b820191906000526020600020905b81548152906001019060200180831161030357829003601f168201915b5050505050945083805461033390611a20565b80601f016020809104026020016040519081016040528092919081815260200182805461035f90611a20565b80156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b50505050509350945094509450945094509091929394565b6103f07f2e330d07637adea70edd082f0e5a7aa08031172a1b497f59a464f9a8a07f778b60001b610dd8565b61041c7f795e5911d2bd3796a9a672aa47e90e393f435c963438b14972f6c99f303fd41560001b610dd8565b6104487f78eea6d7e7b655ba1c70214e007f6ed4e714da9f1c290583bb87b4c29d1b797260001b610dd8565b6104747f3f5ee1df2e69d4aea2437b2dce7409c527aef529b9aa33077ccb94b484408e6d60001b610dd8565b60011515600160060160009054906101000a900460ff161515146104cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c490611a9e565b60405180910390fd5b6104f97f56034d392cc79aa1c1b0447e8d553f6ab8e2a82ffa3ec9f1bee8c4b703eb0fc860001b610dd8565b6105257f629ef20d7da059c20568008feff894efb7abedc4ee82003d2c611111fa5791bc60001b610dd8565b6105517facee9b87380d88bc0827b8b569576198b3310079df1330467c88af569f4aefeb60001b610dd8565b61057d7f03abbab23a42a47f625e88835383818004a2d471be7bdcb7ce1cfe001b00496d60001b610dd8565b6001600401548161058e9190611aed565b3410156105d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c790611b93565b60405180910390fd5b6105fc7f1ef8ac0960e434441439589569b54d0beeec52727d7945e80b779021396d03df60001b610dd8565b6106287f70c511c822a4054b523502d96c195eb02202a20769f7ccd303178a3252bd3d6960001b610dd8565b6106547f2f1be541cff384936bb48ab9f1b3ca492f144afe36578e7d599882b8af4d411960001b610dd8565b6106807fd9008737e5cdd54c7f9b71978755afc5f9002681469cfbda51e095df2439a69560001b610dd8565b6001600301546001600201546106969190611bb3565b8111156106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cf90611c33565b60405180910390fd5b6107047f0dca5780dcfddf4a282bfbbf282e3d0ee1232e938170f8445a10e3e288695c5b60001b610dd8565b6107307f06bd9becbe6feb436b5c4405d455716cab0d0521f01f67a872266ef48b91a34960001b610dd8565b61075c7fd5acecde524bd228df0ecdc4553ce47baa89481e9b609aaae5ceeb54d90d083b60001b610dd8565b80600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107ae9190611c53565b925050819055506107e17f6e2ca5ec7ac191b6b5ee8f4af99622688e5ec9e19685406d0bad840b4fd9ab1160001b610dd8565b61080d7f3704335e186f44aa84f0b8ee5b422ed9bbf5899314e75e742650f390ab3f688f60001b610dd8565b80600160030160008282546108229190611c53565b925050819055506108557f25848a4954fa646b527377d3186a71986b569d3154cb2c91e4b4cfdc4dab23e160001b610dd8565b6108817ffb8cc5b5b69ca800253587d4169038c5345caf57a8bd928b1d3c90df4cf19d7860001b610dd8565b80600160020160008282546108969190611bb3565b925050819055506108c97f4d3e37350b947ba2afce63ac6a50f2260d3bd748a6007aa5dec042eeb3a2c5e860001b610dd8565b6108f57f4519f892f6a94b031c826310a9515fd4d8bd3116edc3adf6bb967b3903962f1560001b610dd8565b6000600160040154826109089190611aed565b90506109367f87798d52966de5f36ea72cc228d821fae30af0917eb8224f400cddfba4cf118c60001b610dd8565b6109627fa2e34ddb38ff2cece429672197e03bc05155c099a3a35c58ef971b5d1f1b1fcb60001b610dd8565b80341115610a45576109967f9ea57f02d8755778c30a0ded8fb0d29e9e8d9b093f43dccd9b67f841a72df7e160001b610dd8565b6109c27f0734d776ed53be871860d281fcf92bb6a58c64f5a4dd00a44e99c46cd412602760001b610dd8565b6109ee7f5f09619aba767b089372114dfe24f11511b10cfeeb2806fcf5ac9c095ae9757d60001b610dd8565b3373ffffffffffffffffffffffffffffffffffffffff166108fc8234610a149190611bb3565b9081150290604051600060405180830381858888f19350505050158015610a3f573d6000803e3d6000fd5b50610a72565b610a717fd1e767b4f42a9750d670922ed3e91c4367ce898b5cb1d7f7c7b4eddbec2255e260001b610dd8565b5b610a9e7f29bfbf51f495e23c52241d50fc93b2c37d243d914d12682faf765e613809852860001b610dd8565b610aca7ffff26f2b15e02fe08dddc8b83699505afea37c1c98723af8612106665046bf8360001b610dd8565b7f72240c1be87ee789414e12fc30844d39a55d1eaf3b8741489fe381ad2b6cdd473383604051610afb929190611ca9565b60405180910390a15050565b610b0f611666565b73ffffffffffffffffffffffffffffffffffffffff16610b2d610e63565b73ffffffffffffffffffffffffffffffffffffffff1614610b83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7a90611d1e565b60405180910390fd5b610baf7f83d67e2a3f994173410744aa71d9dec432aa87c3642cb1e918ba649210bf2e8f60001b610dd8565b610bdb7fcbbb9ce1cd300e3bc9151f4e315e58c6defefa44e6215cbe33ff9cef00ff97b660001b610dd8565b610c077f3035fb6697d8c15ec6424bcd1c7750d65f4ad510a2fa21a852ef97c843548fcc60001b610dd8565b6000600160060160006101000a81548160ff021916908315150217905550610c517f1a77bc685f28dc801d86c6c3c520f8a9fb188ece7b757c0f758a59ba7899ad4660001b610dd8565b610c7d7f57e7faf9f537994dcba01d70df6e946d6fb2f693d1f703eb2ac83c46b5dc871060001b610dd8565b6000600160030154600160040154610c959190611aed565b9050610cc37f05b1a55aae4acbcedb13a236cdaaa6ab98a4b83f5aa73476ec8801b04846761c60001b610dd8565b610cef7f8fa01b5c8fec5e48e9381c22ce520eb3a0779f51e4c2dc987d2edef81f98010b60001b610dd8565b610cf7610e63565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610d3c573d6000803e3d6000fd5b50610d697f32bd3131a1dac8162f2f1a147d272122e47f1820c2d0108b74ff3488f11637ae60001b610dd8565b610d957f3b8eda67bdc0458f2bcdd580986f83fa3688fd770fe611b5f6b3027657b657b360001b610dd8565b7f21e7b2f8578199ba3904a63b7cd799784c8cadde57dde563a7de95ef792e256c610dbe610e63565b82604051610dcd929190611ca9565b60405180910390a150565b50565b610de3611666565b73ffffffffffffffffffffffffffffffffffffffff16610e01610e63565b73ffffffffffffffffffffffffffffffffffffffff1614610e57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4e90611d1e565b60405180910390fd5b610e61600061166e565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610eb87f4c213ea54c47ea0a208f4a1c269fa9e12becc201c9f1d301c101499a4cbdcf6160001b610dd8565b610ee47f3ddbfcbb5c7e876ab081060a08eb60ceefa19a7f748faea7c248968f6628442f60001b610dd8565b610f107f7377cedbf1cafebc56c13be3dbb009c2819ec6186bbeb4aec2f5bf31e185ef9960001b610dd8565b610f3c7ff575feadb1b67b184dc496c09799c0f06a17d4c770cff67f96abb3945da63ef060001b610dd8565b6000600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610fc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb890611db0565b60405180910390fd5b610fed7fff43abb66701056d49f10407c96c212456fc34577a25aa871252e49106e3ff6b60001b610dd8565b6110197f0eec9884d0a2e4bc1fd24fe6dde850dd118bdbd5eb68409e3a5589a5123bdceb60001b610dd8565b6110457f1ed84695d4d38d7bda832d6d0f91a0532bc5ec6229e2b57d2ebda287f925f7e260001b610dd8565b6110717f323a40285de08f886fdca42718389ec81cc10ce3101eb9db722ac9f78b97157a60001b610dd8565b600081116110b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ab90611e42565b60405180910390fd5b6110e07f31459b714c0f261b79f28f0e3e43f5add264310449b895e18bfc4039c394189c60001b610dd8565b61110c7fa174ed002a319e61966586d20b8d48c4fff89f530d10c0bca537c64c3320916b60001b610dd8565b6111387fef1afc154c1204a423ca50e045db1401d99754a413738508f783a391a54f793b60001b610dd8565b6111647f6a18b7ad760a6ff44001382e47a88e478e037ffaadb781481140bd475837270560001b610dd8565b80600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156111e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e090611ed4565b60405180910390fd5b6112157fc3a6ed526c8817ff744d906b88c97557bf1a789959c17c8d0c121c9f46bd3c8a60001b610dd8565b6112417f0df294f312cc4ce34cd9f4a1ebbbe458628444a29be415eab850303da81799de60001b610dd8565b61126d7f852d63d0d00247099ef4171d24e7ebf7d0b31ee5e3a03c7e7cf2a43282f4938260001b610dd8565b80600160020160008282546112829190611c53565b925050819055506112b57f1fe9fc0093bc5745d5a7da51c3736acabc9bdf3f262b8d0731a84a8b34ad20ec60001b610dd8565b6112e17fa434ea6446a0c640730f0798193da89475c3b8e80243518951fc9f582815757b60001b610dd8565b80600160030160008282546112f69190611bb3565b925050819055506113297f44ac6aeccaf41c9e8ea0076502d5cfb47e21dc5e2d9b7cfdbb068f2f67ab758560001b610dd8565b6113557ff644b7528e9783ea86fccdf44e775f428886fec18b25103e2f9561736a872b1260001b610dd8565b6000816001600401546113689190611aed565b90506113967f5e2aed4cca10f91391eba7bf0fe553ba9de43f3dffd8964fb778d063503af29260001b610dd8565b6113c27fe626c212bbb823a9e39a96a0dad1b5d09d41ebc140390af6933a3b911f8304b360001b610dd8565b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611408573d6000803e3d6000fd5b506114357f2386c3009ab7721058e6f0eeaebd725567090d4f56ba40b630516ccb18fa49a860001b610dd8565b6114617f06c3011874b02357a126e89c6d4e14b91222598d47b3e55dcfca4d3efa4c1bb060001b610dd8565b7f492e1d962a477f77890c7cfdb563d7ddc58fee6505741794fa5700ada3c160413382604051611492929190611ca9565b60405180910390a15050565b60006114cc7f4fe82631d77ba5e10d32912dbf3ad33487d8753d111e9d5e2c3a6d5a29d72dcd60001b610dd8565b6114f87f958501792526b4fae860d8f61a54afaf35303479baaff93299646bf1ddf89d5060001b610dd8565b6115247fc17f81fc22be14c81e12135258a3daddff78b2db3b86d80dfcf8e3010f7bb46960001b610dd8565b600160050160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611576611666565b73ffffffffffffffffffffffffffffffffffffffff16611594610e63565b73ffffffffffffffffffffffffffffffffffffffff16146115ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e190611d1e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561165a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165190611f66565b60405180910390fd5b6116638161166e565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561176c578082015181840152602081019050611751565b8381111561177b576000848401525b50505050565b6000601f19601f8301169050919050565b600061179d82611732565b6117a7818561173d565b93506117b781856020860161174e565b6117c081611781565b840191505092915050565b6000819050919050565b6117de816117cb565b82525050565b60008115159050919050565b6117f9816117e4565b82525050565b600060a08201905081810360008301526118198188611792565b9050818103602083015261182d8187611792565b905061183c60408301866117d5565b61184960608301856117d5565b61185660808301846117f0565b9695505050505050565b600080fd5b61186e816117cb565b811461187957600080fd5b50565b60008135905061188b81611865565b92915050565b6000602082840312156118a7576118a6611860565b5b60006118b58482850161187c565b91505092915050565b6000819050919050565b6118d1816118be565b81146118dc57600080fd5b50565b6000813590506118ee816118c8565b92915050565b60006020828403121561190a57611909611860565b5b6000611918848285016118df565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061194c82611921565b9050919050565b61195c81611941565b82525050565b60006020820190506119776000830184611953565b92915050565b61198681611941565b811461199157600080fd5b50565b6000813590506119a38161197d565b92915050565b6000602082840312156119bf576119be611860565b5b60006119cd84828501611994565b91505092915050565b60006020820190506119eb60008301846117d5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611a3857607f821691505b60208210811415611a4c57611a4b6119f1565b5b50919050565b7f4576656e7420616c726561647920636c6f736564000000000000000000000000600082015250565b6000611a8860148361173d565b9150611a9382611a52565b602082019050919050565b60006020820190508181036000830152611ab781611a7b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611af8826117cb565b9150611b03836117cb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b3c57611b3b611abe565b5b828202905092915050565b7f46756e6473206e6f7420656e6f75676800000000000000000000000000000000600082015250565b6000611b7d60108361173d565b9150611b8882611b47565b602082019050919050565b60006020820190508181036000830152611bac81611b70565b9050919050565b6000611bbe826117cb565b9150611bc9836117cb565b925082821015611bdc57611bdb611abe565b5b828203905092915050565b7f4f7574206f662073746f636b0000000000000000000000000000000000000000600082015250565b6000611c1d600c8361173d565b9150611c2882611be7565b602082019050919050565b60006020820190508181036000830152611c4c81611c10565b9050919050565b6000611c5e826117cb565b9150611c69836117cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c9e57611c9d611abe565b5b828201905092915050565b6000604082019050611cbe6000830185611953565b611ccb60208301846117d5565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611d0860208361173d565b9150611d1382611cd2565b602082019050919050565b60006020820190508181036000830152611d3781611cfb565b9050919050565b7f456c207573756172696f206e6f20686120636f6d707261646f20656e7472616460008201527f6173000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d9a60228361173d565b9150611da582611d3e565b604082019050919050565b60006020820190508181036000830152611dc981611d8d565b9050919050565b7f4c612063616e7469646164206465207469636b6574732064656265207365722060008201527f6d61796f72206120300000000000000000000000000000000000000000000000602082015250565b6000611e2c60298361173d565b9150611e3782611dd0565b604082019050919050565b60006020820190508181036000830152611e5b81611e1f565b9050919050565b7f4e6f207075656465206465766f6c766572206573612063616e7469646164206460008201527f6520656e74726164617300000000000000000000000000000000000000000000602082015250565b6000611ebe602a8361173d565b9150611ec982611e62565b604082019050919050565b60006020820190508181036000830152611eed81611eb1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611f5060268361173d565b9150611f5b82611ef4565b604082019050919050565b60006020820190508181036000830152611f7f81611f43565b905091905056fea2646970667358221220e370feb713da524160ce7c86dc029853641c9ca79878b9851d524e607d62b4ba64736f6c634300080b0033";

export class DefaultEventTickets__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _description: string,
    _url: string,
    _totalTickets: BigNumberish,
    _ticketPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DefaultEventTickets> {
    return super.deploy(
      _description,
      _url,
      _totalTickets,
      _ticketPrice,
      overrides || {}
    ) as Promise<DefaultEventTickets>;
  }
  getDeployTransaction(
    _description: string,
    _url: string,
    _totalTickets: BigNumberish,
    _ticketPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _description,
      _url,
      _totalTickets,
      _ticketPrice,
      overrides || {}
    );
  }
  attach(address: string): DefaultEventTickets {
    return super.attach(address) as DefaultEventTickets;
  }
  connect(signer: Signer): DefaultEventTickets__factory {
    return super.connect(signer) as DefaultEventTickets__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultEventTicketsInterface {
    return new utils.Interface(_abi) as DefaultEventTicketsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultEventTickets {
    return new Contract(address, _abi, signerOrProvider) as DefaultEventTickets;
  }
}