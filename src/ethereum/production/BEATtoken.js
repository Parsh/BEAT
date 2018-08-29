import web3 from './web3';
import compiledBEATtoken from '../build/BEATtoken.json';

const token = new web3.eth.Contract(
  JSON.parse(compiledBEATtoken.interface),
  '0x455b29dBE4F80DF21778abba0784077916D6D6A1'
);

export default token;
