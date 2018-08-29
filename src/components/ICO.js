import React from 'react';

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
        <div className="md-form">
          <input
            type="text"
            className="form-control text-center w-75 m-auto"
            placeholder="Number of tokens"
          />
        </div>
        <button className="btn btn-primary w-25">Buy !</button>
      </div>
    </div>
  );

  const infoCard = (
    <div className="mt-5">
      <div className="card-body text-center">
        <h3 className="card-title">
          <a>BEAT Token</a>
        </h3>
        <h4 className="text-muted mt-3"> Token Price: 10000 wei</h4>
        <h5 className="text-muted mt-3 ">Tokens Sold: 1000/500000</h5>
        <div className="progress md-progress mt-3" style={{ height: 10 }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '55%', height: 10 }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
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
