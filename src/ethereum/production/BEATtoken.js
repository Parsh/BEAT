import web3 from './web3';
import compiledBEATtoken from './build/compiledBEATtoken';

const token = new web3.eth.Contract(
  JSON.parse(compiledBEATtoken.interface),
  '0x2FD5921c285F61E7393A4C24cBa5a70006935EE2'
);

export default token;
