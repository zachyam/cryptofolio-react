import React, { Component } from 'react';
import ExchangesList from '../ExchangesList';
import ExchangesAccount from '../ExchangesAccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>CryptoFolio</h3>
        </div>
        <div className="row">
          <ExchangesList />
        </div>
        <div className="exchangeAccountsRow" >
          <ExchangesAccount />
        </div>


      </div>
    );
  }
}

export default App;
