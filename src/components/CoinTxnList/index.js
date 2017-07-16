/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

class CoinTxnList extends Component {

  render() {
    let { coins, index } = this.props;
    return (
      <div>
        { coins[index]['formCount'] > 0 && Object.keys(coins[index]['form']).map((txn, key) =>
          <h4 key={key}>{coins[index]['form'][txn]['values']['coinAmount']}</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinTxnList);
