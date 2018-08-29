import web3 from './web3';
import compiledBEATtoken from '../build/BEATtoken.json';

const token = new web3.eth.Contract(
  JSON.parse(compiledBEATtoken.interface),
  '0x7eC719Db69FEF58f614d9EFb658a8Cd5AfEBFE7F'
);

export default token;
