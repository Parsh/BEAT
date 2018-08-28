const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const BEATtoken = path.resolve(__dirname, 'contracts', 'BEATtoken.sol');
const BEAT_ICO = path.resolve(__dirname, 'contracts', 'BEAT_ICO.sol');

const input = {
  'BEATtoken.sol': fs.readFileSync(BEATtoken, 'utf8'),
  'BEAT_ICO.sol': fs.readFileSync(BEAT_ICO, 'utf8')
};

output = solc.compile({ sources: input }, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(
      buildPath,
      contract.substring(0, contract.indexOf('.')) + '.json'
    ),
    output[contract]
  );
}
