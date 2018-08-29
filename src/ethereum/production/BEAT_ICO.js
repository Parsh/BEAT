import web3 from './web3';
import compiledBEAT_ICO from '../build/BEAT_ICO.json';

const ico = new web3.eth.Contract(
  JSON.parse(compiledBEAT_ICO.interface),
  '0x2CbB602a9C0c1063075592022A6d59A97fB43C43'
);

export default ico;
