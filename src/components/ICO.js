import React from 'react';
import web3 from '../ethereum/production/web3';

const ICO = props => {
  const jumbotron = (
    <div className="z-depth-5 animated fadeIn">
      <div
        className="jumbotron text-center text-white"
        style={{
          backgroundImage:
            'url(https://coolbackgrounds.io/images/backgrounds/compute-83062381.png)'
        }}
      >
        <h1 className="display-3 mb-3 blue-text">
          <strong>BEAT ICO</strong>
        </h1>
        <p className="h3-responsive container">
          BEAT is an EIP-20 compliant token that gives you access to the the
          decentralized dimensions of music. During the Initial Coin Offering
          phase, we are providing people with BEAT tokens at half of it's
          concieved price.
        </p>
      </div>
    </div>
  );

  const buyCard = (
    <div className="z-depth-5 mt-5 animated fadeIn">
      <div
        className="card"
        style={{
          backgroundImage:
            'url(https://coolbackgrounds.io/images/backgrounds/compute-83062381.png)',
          backgroundPosition: 'left'
        }}
      >
        <div className="card-body text-center text-white">
          <h1 className="card-title">Buy BEATs</h1>
          <h4>You currently have: {props.tokenBalance || '__'} beats</h4>
          <div className="md-form">
            <input
              type="text"
              className="form-control form-control-lg text-center w-75 m-auto text-white"
              value={props.buyTokens}
              onChange={event => {
                props.onInputChange(event);
              }}
            />
          </div>
          {props.loading ? (
            <button
              className="btn btn-primary w-25 animated fadeIn"
              style={{ fontSize: '15px' }}
              disabled
            >
              <i className="fa fa-refresh fa-spin mr-3"> </i>
              Transfering...
            </button>
          ) : (
            <button
              className="btn btn-primary w-25"
              disabled={props.firefoxCORSError || props.otherNetwork}
              style={{ fontSize: '15px' }}
              onClick={props.onBuy}
            >
              Buy !
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const infoCard = (
    <div className="z-depth-5 animated fadeIn">
      <div
        className="card mt-5"
        style={{
          backgroundImage:
            'url(https://coolbackgrounds.io/images/backgrounds/compute-83062381.png)',
          backgroundPosition: 'right',
          height: '260px'
        }}
      >
        <div className="card-body text-center text-white mt-3">
          <h1 className="card-title">BEAT Token</h1>
          <h3 className="mt-3">
            Token Price: {web3.utils.fromWei(props.tokenPrice, 'ether')} ether
          </h3>
          <h4 className="mt-3 ">
            Tokens Sold: {props.tokensSold}/{props.initialICOFund}
          </h4>
          <div
            className="progress md-progress mt-4 mb-4"
            style={{ height: 10 }}
          >
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{
                width: `${(props.tokensSold / props.initialICOFund) * 100}%`,
                height: '10px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-5 mb-5">
      {jumbotron}
      <div style={{ marginTop: '75px' }}>
        <div className="row">
          <div className="col-md-5">{infoCard}</div>
          <div className="col-md-7">{buyCard}</div>
        </div>
      </div>
    </div>
  );
};

export default ICO;
