import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAF9a7c5340f05390F69797026738875C5c50c7fB",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "GreenHomes",
        description: "This NFT will give you access to GreenHomesDAO!",
        image: readFileSync("C:/Users/Keldrick Dickey/Developer/buildspace-dao-starter/scripts/assets/Green Homes.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()