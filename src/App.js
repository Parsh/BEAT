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
    totalTokens: 75000,
    tokenBalance: '',
    buyTokens: ''
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const tokenPrice = await ico.methods.tokenPrice().call();
    const tokenBalance = await token.methods.balanceOf(accounts[0]).call();

    this.setState({
      tokenPrice: web3.utils.fromWei(tokenPrice, 'ether'),
      tokenBalance
    });
  }

  onInputChange = event => {
    this.setState({ buyTokens: event.target.value });
  };

  onBuy = async () => {
    console.log(this.state.buyTokens);
  };

  render() {
    return (
      <ICO
        {...this.state}
        onBuy={this.onBuy}
        onInputChange={this.onInputChange}
      />
    );
  }
}

export default App;
