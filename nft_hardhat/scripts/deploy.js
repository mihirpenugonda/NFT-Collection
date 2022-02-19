const { ethers } = require("hardhat");
require("dotenv").config({
  path: ".env",
});
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants.js");

async function main() {
  const whitelistAddress = WHITELIST_CONTRACT_ADDRESS;
  const metadataUrl = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const deployedContract = await cryptoDevsContract.deploy(
    metadataUrl,
    whitelistAddress
  );

  console.log("cryptoDevs contract address: ", deployedContract.address);
  // 0x5E886114406926791d77840Fe651EbB819E241d6
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
