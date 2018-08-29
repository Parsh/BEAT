import React from 'react';
import web3 from '../ethereum/production/web3';

const ICO = props => {
  const jumbotron = (
    <div className="jumbotron text-center">
      <h1 className="display-3 mb-4 blue-text">
        <strong>BEAT ICO</strong>
      </h1>
      <p className="h4-responsive">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
    </div>
  );

  const buyCard = (
    <div className="card mt-5">
      <div className="card-body text-center">
        <h2 className="card-title">Buy BEATs</h2>
        <h4 className="text-muted">You currently have: {props.tokenBalance}</h4>
        <div className="md-form">
          <input
            type="text"
            className="form-control text-center w-75 m-auto"
            value={props.buyTokens}
            onChange={event => {
              props.onInputChange(event);
            }}
            placeholder="Number of tokens"
          />
        </div>
        <button className="btn btn-primary w-25" onClick={props.onBuy}>
          Buy !
        </button>
      </div>
    </div>
  );

  const infoCard = (
    <div className="mt-5">
      <div className="card-body text-center">
        <h3 className="card-title">BEAT Token</h3>
        <h4 className="text-muted mt-3">
          Token Price: {web3.utils.fromWei(props.tokenPrice, 'ether')} ether
        </h4>
        <h5 className="text-muted mt-3 ">
          Tokens Sold: {props.tokensSold}/{props.totalTokens}
        </h5>
        <div className="progress md-progress mt-3" style={{ height: 10 }}>
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{
              width: `${(props.tokensSold / props.totalTokens) * 100}%`,
              height: '10px'
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {jumbotron}
      <div className="container" style={{ marginTop: '75px' }}>
        <div className="row">
          <div className="col-sm-4">{infoCard}</div>

          <div className="col-sm-8">{buyCard}</div>
        </div>
      </div>
    </div>
  );
};

export default ICO;
