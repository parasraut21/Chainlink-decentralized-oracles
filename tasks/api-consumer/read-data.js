const { isLocalNetwork, formatBigInt, isValidAddress } = require("../../utils/helpers");

/**
 * Hardhat task to read data from an API Consumer contract
 * @param {string} contract - The address of the API Consumer contract
 * @returns {Promise<void>}
 */
task("read-data", "Calls an API Consumer Contract to read data obtained from an external API")
    .addParam("contract", "The address of the API Consumer contract that you want to call")
    .setAction(async (taskArgs) => {
        try {
            const contractAddr = taskArgs.contract
            const networkId = network.name
            
            // Validate contract address
            if (!isValidAddress(contractAddr)) {
                throw new Error("Invalid contract address provided")
            }
            
            console.log(
                "Reading data from API Consumer contract ",
                contractAddr,
                " on network ",
                networkId
            )
            const APIConsumer = await ethers.getContractFactory("APIConsumer")

            //Get signer information
            const accounts = await ethers.getSigners()
            const signer = accounts[0]

            //Create connection to API Consumer Contract and call the createRequestTo function
            const apiConsumerContract = new ethers.Contract(contractAddr, APIConsumer.interface, signer)
            let result = formatBigInt(await apiConsumerContract.volume())
            console.log("Data is: ", result)
            
            if (result == 0 && isLocalNetwork(networkId)) {
                console.log("You'll either need to wait another minute, or fix something!")
            }
            if (isLocalNetwork(networkId)) {
                console.log("You'll have to manually update the value since you're on a local chain!")
            }
        } catch (error) {
            console.error("Error reading data from API Consumer contract:", error.message)
            process.exit(1)
        }
    })

module.exports = {}
