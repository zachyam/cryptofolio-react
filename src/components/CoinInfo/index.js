/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Field, reduxForm } from 'redux-form'
import CoinModal from '../CoinModal'

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

  };
  submit(values) {
    const { saveCoinInfo } = this.props;
    saveCoinInfo(values);
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

function mapDispatchToProps(dispatch) {
  return {
    saveCoinInfo: bindActionCreators(actions.saveCoinInfo, dispatch),
  };
}

CoinInfo.propTypes = {
  saveCoinInfo: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinInfo);
