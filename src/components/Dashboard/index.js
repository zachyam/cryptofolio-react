import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    const { coins } = this.props;
    return (
      <h1> Test {coins}</h1>
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
