import React, { Component } from 'react';
import ICO from './components/ICO';
import './App.css';

import web3 from './ethereum/production/web3';
import token from './ethereum/production/BEATtoken';
import ico from './ethereum/production/BEAT_ICO';

class App extends Component {
  state = {
    tokenPrice: '',
    tokensSold: '',
    initialICOFund: 25000,
    tokenBalance: '',
    buyTokens: '',
    loading: false,
    errorMessage: '',
    successMessage: ''
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const tokenPrice = await ico.methods.tokenPrice().call();
    const tokensLeft = await token.methods
      .balanceOf(ico.options.address)
      .call();

    const tokenBalance = await token.methods.balanceOf(accounts[0]).call();

    this.setState({
      tokenPrice: tokenPrice,
      tokensSold: this.state.initialICOFund - parseInt(tokensLeft, 10),
      tokenBalance
    });
  }

  onInputChange = event => {
    this.setState({ buyTokens: event.target.value });
  };

  onBuy = async () => {
    this.setState({
      loading: true,
      errorMessage: '',
      successMessage: ''
    });

    const accounts = await web3.eth.getAccounts();
    await ico.methods.buyTokens(parseInt(this.state.buyTokens, 10)).send({
      from: accounts[0],
      value:
        parseInt(this.state.tokenPrice, 10) * parseInt(this.state.buyTokens, 10)
    });

    const updatedBalance = await token.methods.balanceOf(accounts[0]).call();
    this.setState({
      loading: false,
      tokenBalance: updatedBalance
    });
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
