const createContractInstance = require('./connection');

let instance;
let accounts = [];
async function init() {
    try {
        const { contractInstance, account } = await createContractInstance();
        instance = contractInstance;
        accounts = account;

        // Call addNum after instance & accounts are ready
        const receipt = await subNum(1, 2, accounts[0]);
        console.log("Transaction receipt: ", receipt);
    } catch (error) {
        console.error("Error creating contract instance: ", error);
    }
}

async function subNum(num1, num2, from) {
  return instance.methods.subNum(num1, num2).send({ from });
}
init();


module.exports = subNum;
