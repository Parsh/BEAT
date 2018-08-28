const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledBEATtoken = require('./build/BEATtoken.json');

const mnemonic =
  'chief outside coast artefact enrich pelican raw top yellow witness slogan glide';
const networkUrl =
  'https://rinkeby.infura.io/v3/b4e2b3bf723f4985ae36bc838089e50d';

const provider = new HDWalletProvider(mnemonic, networkUrl);
const web3 = new Web3(provider);

var accounts, beatToken;

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  beatToken = await new web3.eth.Contract(
    JSON.parse(compiledBEATtoken.interface)
  )
    .deploy({
      data: '0x' + compiledBEATtoken.bytecode
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log(
    'Contract Deployed! Contract Address: ',
    beatToken.options.address
  );
  //Latest Deployed Campaign Factory Address:
};

deploy();
