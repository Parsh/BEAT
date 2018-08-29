import web3 from './web3';
import compiledBEAT_ICO from '../build/BEAT_ICO.json';

const ico = new web3.eth.Contract(
  JSON.parse(compiledBEAT_ICO.interface),
  '0xb788eA06f9878b0a66FeFE30CF43e1185FE7d3e3'
);

export default ico;
