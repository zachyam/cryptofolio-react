import React, { Component } from 'react';
import Exchanges from '../Exchanges';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>CryptoFolio</h3>
        </div>
        <Exchanges />

      </div>
    );
  }
}

export default App;