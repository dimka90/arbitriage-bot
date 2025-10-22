import { PriceFeedService } from "./Services/priceFeed";
const  base= new PriceFeedService();
(async () => {
  await base.getWethUsdcPrice();
})();