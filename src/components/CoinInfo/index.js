/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

class CoinInfo extends Component {

  render() {
    const { coin } = this.props;
    return (
      <div>
        <h1> {coin} </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinInfo);
