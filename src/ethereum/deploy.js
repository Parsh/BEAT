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
  const numberOfTokens = '100000';

  accounts = await web3.eth.getAccounts();

  beatToken = await new web3.eth.Contract(
    JSON.parse(compiledBEATtoken.interface)
  )
    .deploy({
      data: '0x' + compiledBEATtoken.bytecode,
      arguments: [numberOfTokens]
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log(
    'BEAT Token Deployed! Contract Address: ',
    beatToken.options.address
  );
  //Recently deployed BEATtoken Contract Address: 0x455b29dBE4F80DF21778abba0784077916D6D6A1
};

let beatICO;

const deployICO = async () => {
  const tokenPrice = '1000000000'; //price of each token in denomination of wei

  beatICO = await new web3.eth.Contract(JSON.parse(compiledBeatICO.interface))
    .deploy({
      data: '0x' + compiledBeatICO.bytecode,
      arguments: [beatToken.options.address, tokenPrice]
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log('BEAT ICO Deployed! Contract Address: ', beatICO.options.address);
  //Recently deployed BEAT ICO Contract Address: 0xb788eA06f9878b0a66FeFE30CF43e1185FE7d3e3
};

const fundICO = async () => {
  await beatToken.methods.transfer(beatICO.options.address, 10000).send({
    from: accounts[0],
    gas: '2000000'
  });

  console.log(
    `ICO is funded with: ${await beatToken.methods
      .balanceOf(beatICO.options.address)
      .call()} tokens`
  );
};

deployBEATtoken()
  .then(deployICO)
  .then(fundICO);
