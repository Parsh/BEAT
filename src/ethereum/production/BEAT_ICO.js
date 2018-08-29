import web3 from './web3';
import compiledBEAT_ICO from './build/compiledBEAT_ICO';

const ico = new web3.eth.Contract(
  JSON.parse(compiledBEAT_ICO.interface),
  '0x8E2eBB526617EBF739d51A40c28c83d13F4d8A95'
);

export default ico;
