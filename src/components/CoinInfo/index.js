/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Field, reduxForm } from 'redux-form'
import CoinModal from '../CoinModal'

class CoinInfo extends Component {
  submit(values) {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <CoinModal coin={this.props.coin} onSubmit={this.submit} />
    )
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
