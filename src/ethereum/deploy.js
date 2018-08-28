const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledBEATtoken = require('./build/BEATtoken.json');
const compiledBeatICO = require('./build/BEAT_ICO.json');

const mnemonic =
  'chief outside coast artefact enrich pelican raw top yellow witness slogan glide';
const networkUrl =
  'https://rinkeby.infura.io/v3/b4e2b3bf723f4985ae36bc838089e50d';

const provider = new HDWalletProvider(mnemonic, networkUrl);
const web3 = new Web3(provider);

let accounts, beatToken;

const deployBEATtoken = async () => {
  accounts = await web3.eth.getAccounts();

  beatToken = await new web3.eth.Contract(
    JSON.parse(compiledBEATtoken.interface)
  )
    .deploy({
      data: '0x' + compiledBEATtoken.bytecode,
      arguments: ['100000']
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log(
    'BEAT Token Deployed! Contract Address: ',
    beatToken.options.address
  );
  //Recently deployed BEATtoken Contract Address:
};

const deployICO = async () => {
  const tokenPrice = '10000'; //price of each token in denomination of wei

  const beatICO = await new web3.eth.Contract(
    JSON.parse(compiledBeatICO.interface)
  )
    .deploy({
      data: '0x' + compiledBeatICO.bytecode,
      arguments: [beatToken.options.address, tokenPrice]
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log('BEAT ICO Deployed! Contract Address: ', beatICO.options.address);
  //Recently deployed BEAT ICO Contract Address:
};

deployBEATtoken().then(deployICO);
