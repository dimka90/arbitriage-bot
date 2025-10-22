import {config} from "../config";
import { PriceServiceConnection } from "@pythnetwork/price-service-client";

export class PriceFeedService {
  constructor(
       private endpoint: string = config.HERMES_ENDPOINT || "https://hermes.pyth.network" 
  ) {

  }
  async getWethUsdcPrice(){
    const connection = new PriceServiceConnection(this.endpoint, {timeout: 15000})
    const priceFeeds= await connection.getLatestPriceFeeds([config.WETH_USDC_ID])
if (!priceFeeds || priceFeeds.length === 0) {
      console.log("No price data found!");
      return;
    }


    const priceData : any = priceFeeds[0].getPriceUnchecked()
    console.log(priceData)
    const price = priceData.price * 10 ** priceData.expo;

    console.log("WETH/USDC Price:", price);
    return price
  }
  
}
