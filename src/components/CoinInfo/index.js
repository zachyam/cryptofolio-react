/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Field, reduxForm } from 'redux-form'
import CoinModal from '../CoinModal'
import CoinTxnList from '../CoinTxnList'

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

  };
  submit(values) {
    const { saveCoinInfo, index } = this.props;
    console.log(values);
    saveCoinInfo(index, values);
  }

  render() {
    return (
      <div>
        <CoinModal coin={this.props.coin} onSubmit={this.submit} />
        <CoinTxnList coin={this.props.coin} index={this.props.index} />
      </div>

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
