/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    let { coins } = this.props;
    console.log(coins);
    return (
      <div>
        <h1> Test </h1>
        {Object.keys(coins).map((coin, index) =>
          <h4 key={index}> {coins[coin]} </h4>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.addCoin
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
