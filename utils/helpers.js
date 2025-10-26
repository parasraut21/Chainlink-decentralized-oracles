const { NETWORKS } = require("./constants");

/**
 * Utility functions for Chainlink contract interactions
 */

/**
 * Check if the current network is a local development network
 * @param {string} networkName - The name of the current network
 * @returns {boolean} True if it's a local network
 */
function isLocalNetwork(networkName) {
    return NETWORKS.LOCAL.includes(networkName);
}

/**
 * Format BigInt values for display
 * @param {BigInt} value - The BigInt value to format
 * @returns {string} Formatted string representation
 */
function formatBigInt(value) {
    return BigInt(value).toString();
}

/**
 * Validate Ethereum address format
 * @param {string} address - The address to validate
 * @returns {boolean} True if valid address format
 */
function isValidAddress(address) {
    return address && ethers.utils.isAddress(address);
}

module.exports = {
    isLocalNetwork,
    formatBigInt,
    isValidAddress
};