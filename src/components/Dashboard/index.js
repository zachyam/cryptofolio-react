/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCoins from '../MyCoins';

class Dashboard extends Component {

  render() {
    return (
      <MyCoins />
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
