// const { ChainId } =require("@biconomy/core-types");

// // Initialize the Smart Account
// // All values are optional except networkConfig only in the case of gasless dappAPIKey is required
// let options = {
//     activeNetworkId: ChainId.GOERLI,
//     supportedNetworksIds: [ChainId.GOERLI, ChainId.POLYGON_MAINNET, ChainId.POLYGON_MUMBAI],
//     networkConfig: [
//         {
//             chainId: ChainId.POLYGON_MUMBAI,
//             dappAPIKey: "_Qr0FFOhC.e478ce7b-c72e-4107-838a-f75c8cfaa052",
//             providerUrl:"https://dashboard.biconomy.io/paymaster/17cf3f11-f724-47e3-9e27-f885134cc613"
//         },

//         {
//             chainId: ChainId.POLYGON_MAINNET,
//             dappAPIKey: "RfSr2uexN.38ff12ae-1dcd-4d45-aef1-01ec1b8e1e63",
//             providerUrl:"https://dashboard.biconomy.io/paymaster/c14cb094-7341-4138-9f0c-95db6c8c405d"
            
//         }
//     ]
// }

// const Dapp = async () => {
//     // this provider is from the social login which we created in previous setup
//     let smartAccount = new SmartAccount(provider, options);
//     smartAccount = await smartAccount.init();
// }

// Dapp()

// import package


const SmartAccount = require("@biconomy/smart-account");

// Get the EOA and provider from you choice of your wallet.
const { provider, address } = useWeb3AuthContext();
const walletProvider = new ethers.providers.Web3Provider(provider);

// Choose Blockchain networks, you wants to interact with
let options = {
 activeNetworkId: ChainId.GOERLI,
 supportedNetworksIds: [ ChainId.GOERLI, ChainId.POLYGON_MAINNET, ChainId.POLYGON_MUMBAI]
 }

// Intialise package with provider and Blockchain networks
const Map = async () => {

    let smartAccount = new SmartAccount(walletProvider, options)
    smartAccount = await smartAccount.init()
}

Map()