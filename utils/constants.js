/**
 * Constants used across the project
 */

// Network configurations
const NETWORKS = {
    LOCAL: ["hardhat", "localhost", "ganache"],
    TESTNET: ["goerli", "sepolia", "mumbai"],
    MAINNET: ["mainnet", "polygon", "bsc"]
};

// Contract deployment configurations
const DEPLOYMENT_CONFIG = {
    GAS_LIMIT: 500000,
    GAS_PRICE: "20000000000", // 20 gwei
    CONFIRMATIONS: 2
};

// API Consumer specific constants
const API_CONSUMER = {
    DEFAULT_TIMEOUT: 30000, // 30 seconds
    RETRY_ATTEMPTS: 3
};

module.exports = {
    NETWORKS,
    DEPLOYMENT_CONFIG,
    API_CONSUMER
};