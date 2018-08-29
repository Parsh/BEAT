import React, { Component } from 'react';
import ICO from './components/ICO';
import './App.css';

import web3 from './ethereum/production/web3';
import token from './ethereum/production/BEATtoken';
import ico from './ethereum/production/BEAT_ICO';

class App extends Component {
  state = {
    tokenPrice: '',
    tokensSold: 20500,
    totalTokens: 75000
  };

  async componentDidMount() {
    const tokenPrice = await ico.methods.tokenPrice().call();
    this.setState({ tokenPrice: web3.utils.fromWei(tokenPrice, 'ether') });
  }

  render() {
    return <ICO {...this.state} />;
  }
}

export default App;
