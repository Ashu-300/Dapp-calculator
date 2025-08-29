const {Web3} = require('web3');
const calculator = require('../build/contracts/calculator.json');

const provider = new Web3('http://localhost:8545');
const web3Instance = new Web3(provider);

async function connection() {
    const accounts = await web3Instance.eth.getAccounts();
    // console.log("accounts", accounts);
}

connection();


async function createContractInstance(){
    const account = await web3Instance.eth.getAccounts(); // get the all account
    const networkId = await web3Instance.eth.net.getId();
    const {address} = calculator.networks[networkId]; // address of deployed contract
    
    const contractInstance = new web3Instance.eth.Contract(
        calculator.abi,
        address
    );
  
        
    return {contractInstance, account};
}

module.exports = createContractInstance;

