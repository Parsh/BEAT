import web3 from './web3';
import compiledBEAT_ICO from './build/compiledBEAT_ICO';

const ico = new web3.eth.Contract(
  JSON.parse(compiledBEAT_ICO.interface),
  '0xd3459F8b8089e991Da314E7137991f2D316B848d'
);

export default ico;
