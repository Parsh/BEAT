const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledBEATtoken = require('./build/BEATtoken.json');
const compiledBeatICO = require('./build/BEAT_ICO.json');
const config = require('./production/config');

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
      arguments: [config.INITIAL_SUPPLY]
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log(
    'BEAT Token Deployed! Contract Address: ',
    beatToken.options.address
  );
  //Recently deployed BEATtoken Contract Address:  0x7eC719Db69FEF58f614d9EFb658a8Cd5AfEBFE7F
};

let beatICO;

const deployICO = async () => {
  beatICO = await new web3.eth.Contract(JSON.parse(compiledBeatICO.interface))
    .deploy({
      data: '0x' + compiledBeatICO.bytecode,
      arguments: [beatToken.options.address, config.TOKEN_PRICE]
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log('BEAT ICO Deployed! Contract Address: ', beatICO.options.address);
  //Recently deployed BEAT ICO Contract Address: 0x2CbB602a9C0c1063075592022A6d59A97fB43C43
};

const fundICO = async () => {
  await beatToken.methods
    .transfer(beatICO.options.address, config.ICO_FUND)
    .send({
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
