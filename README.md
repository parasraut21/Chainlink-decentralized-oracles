# Chainlink Price Feed Contract

A simple Solidity contract that demonstrates how to consume price data from Chainlink Price Feeds using the AggregatorV3Interface.

## Overview

This project contains a `PriceConsumerV3` contract that fetches the latest price data from Chainlink's decentralized oracle network. The contract is designed to work with any Chainlink price feed by accepting the price feed address as a constructor parameter.

## Contract Features

- **Get Latest Price**: Retrieves the most recent price from the specified Chainlink price feed
- **Get Price Feed Address**: Returns the address of the price feed being used
- **Immutable Price Feed**: The price feed address is set once during deployment and cannot be changed

## Contract Details

### PriceConsumerV3.sol

The main contract includes:
- Constructor that accepts a price feed address
- `getLatestPrice()` function that returns the latest price as an int256
- `getPriceFeed()` function that returns the AggregatorV3Interface

### Example Usage

The contract is pre-configured with the ETH/USD price feed address for Sepolia testnet:
```
Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
```

## Setup and Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Add your private key and RPC URLs to the `.env` file

## Compilation

Compile the contract:
```bash
npm run compile
```

## Deployment

Deploy to Sepolia testnet:
```bash
npx hardhat run scripts/deployment/main.js --network sepolia
```

## Testing

Run tests:
```bash
npm test
```

## Supported Networks

- **Sepolia Testnet**: ETH/USD Price Feed
- **Mainnet**: Various price feeds available
- **Polygon**: Various price feeds available

## Price Feed Addresses

For other networks and trading pairs, visit the [Chainlink Price Feeds documentation](https://docs.chain.link/data-feeds/price-feeds/addresses).

## License

MIT License