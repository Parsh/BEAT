import React, { Component } from 'react';
import ICO from './components/ICO';
import './App.css';

import token from './ethereum/production/BEATtoken';
import ico from './ethereum/production/BEAT_ICO';

class App extends Component {
  async componentDidMount() {
    const supply = await token.methods.totalSupply().call();
    const admin = await ico.methods.admin().call();

    console.log('Supply: ', supply);
    console.log('Admin: ', admin);
  }

  render() {
    return <ICO />;
  }
}

export default App;
