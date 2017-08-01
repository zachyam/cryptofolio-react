// es-lint-disable
import React, { Component } from 'react';
// import ExchangesList from '../ExchangesList';
// import ExchangesAccount from '../ExchangesAccount';
import Tabs from '../Tabs';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <h3>CryptoFolio</h3>
        <br />
        <br />
        <div className="row">
          <Tabs/>
        </div>
        <div className="container" >
          <div className="row">
            <br/>
            <br/>
            <br/>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
