const Moralis = require("moralis").default;
const dotenv = require('dotenv').config();

const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY
    // ...and any other configuration
  });

  const chain = EvmChain.BSC;

  // token 0 address, e.g. WBNB token address
  const token0Address = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

  // token 1 address, e.g. LINK token address
  const token1Address = "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD";

  const response = await Moralis.EvmApi.defi.getPairAddress({
    token0Address,
    token1Address,
    chain,
    exchange: "pancakeswapv1",
  });

  console.log(response.toJSON());
};

runApp();