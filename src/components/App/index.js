import React, { Component } from 'react';
import ExchangesList from '../ExchangesList';

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
        {/* <div className="row">
          <ExchangesAccount />
        </div> */}


      </div>
    );
  }
}

export default App;
