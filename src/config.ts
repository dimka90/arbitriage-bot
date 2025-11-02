import dotenv from 'dotenv';
dotenv.config();
export const BASE_URL= process.env.BASE_URL;
export const config={
USDC:"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
WETH:process.env.WETH,
UNISWAP_ROUTER:"0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
SUSHI_SWAP_ROUTER:process.env.SUSHISWAP_ROUTER,
HERMES_ENDPOINT: process.env.HERMES_ENDPOINT,
WETH_USDC_ID: process.env.WETH_USDC_ID || " ",
TOKEN1: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
UNISWAP_V3_FACTORY:"0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
RPC_URL:"https://base-mainnet.g.alchemy.com/v2/tjgIQUEkZoDp_7ACuP7nWxcwkNoWM6Je",

}

console.log(config.SUSHI_SWAP_ROUTER)