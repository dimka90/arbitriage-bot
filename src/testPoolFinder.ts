import { PoolFinderService } from './Services/poolFinder'
import { config } from './config';

async function testPoolFinder() {
  console.log('🚀 Starting Pool Finder Test\n');

  const poolFinder = new PoolFinderService();

  // The tokens from your earlier discovery
  const WETH = config.WETH || "0x4200000000000000000000000000000000000006"
  const TOKEN1 = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"; // The token you found

  try {
    // Find the best pool
    const bestPool = await poolFinder.findBestPoolForPair(WETH, TOKEN1);

    if (bestPool) {
      console.log('✅ SUCCESS! Found the best pool to use for price queries');
      console.log('\nNext step: Query prices from this pool');
    } else {
      console.log('❌ No suitable pool found');
    }

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testPoolFinder();