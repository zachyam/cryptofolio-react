// es-lint-disable
import React, { Component } from 'react';
import Tabs from '../Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>CryptoFolio</h3>
        </div>
        <div className="row">
          <Tabs/>
        </div>
        <div className="container" >
          <div className="row">
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
