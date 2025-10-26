require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const COMPILER_SETTINGS = {
    optimizer: {
        enabled: true,
        runs: 1000000,
    },
    metadata: {
        bytecodeHash: "none",
    },
}

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.7",
        settings: COMPILER_SETTINGS,
    },
    networks: {
        hardhat: {
            chainId: 31337,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL !== undefined ? SEPOLIA_RPC_URL : "",
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            chainId: 11155111,
        },
    },
    defaultNetwork: "hardhat",
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY,
        },
    }
}
