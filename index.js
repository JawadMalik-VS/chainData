const express = require("express");
const dotenv = require('dotenv').config();
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3000;



    
async function getDemoData() {
    // Get native balance
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      address,
      chain,
    });

  
    // Format the native balance formatted in ether via the .ether getter
    const native = nativeBalance.result.balance.ether;


    const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain
    })
  
    const tokens = tokenBalances.result.map((token) => token.display())
    
    const nftsBalance = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
        limit: 10
    })
     // Format the output to return name, amount and metadata
  const nfts = nftsBalance.result.map((nft) => ({
    name: nft.result.name,
    amount: nft.result.amount,
    metadata: nft.result.metadata,
  }));
    return { native,tokens,nfts };
  }

// Add a variable for the api key, address and chain
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
const address = "0x3BD2dFd03BC7c3011ed7fb8c4d0949B382726cee";
const chain = EvmChain.ETHEREUM;

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.get("/demo", async (req, res) => {
    try {
        const data = await getDemoData();
        res.status(200);
        res.json(data);
    } catch (error) {
         // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message })
    }
})

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });
    

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

// Call startServer()
startServer();