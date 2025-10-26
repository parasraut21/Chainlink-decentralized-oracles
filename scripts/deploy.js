const { ethers } = require("hardhat");

async function main() {
    // ETH/USD Price Feed address on Sepolia testnet
    const priceFeedAddress = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
    
    console.log("Deploying PriceConsumerV3 contract...");
    
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
    const priceConsumer = await PriceConsumerV3.deploy(priceFeedAddress);
    
    await priceConsumer.deployed();
    
    console.log("PriceConsumerV3 deployed to:", priceConsumer.address);
    console.log("Price Feed Address:", priceFeedAddress);
    
    // Get the latest price
    const latestPrice = await priceConsumer.getLatestPrice();
    console.log("Latest ETH/USD Price:", ethers.utils.formatUnits(latestPrice, 8));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });