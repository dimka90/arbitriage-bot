import dotenv from 'dotenv';
dotenv.config();
export const BASE_URL= process.env.BASE_URL;
export const config={
USDC:process.env.USDC,
WETH:process.env.WETH,
UNISWAP_ROUTER:process.env.UNISWAP_V2_ROUTER,
SUSHI_SWAP_ROUTER:process.env.SUSHISWAP_ROUTER,
HERMES_ENDPOINT: process.env.HERMES_ENDPOINT,
WETH_USDC_ID: process.env.WETH_USDC_ID || " "
}

console.log(config.SUSHI_SWAP_ROUTER)