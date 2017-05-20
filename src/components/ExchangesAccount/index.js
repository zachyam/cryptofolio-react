import React from 'react';
import '../../css/paper-dashboard.css';
import { connect } from 'react-redux';

function ExchangesAccount({
  exchangesAccountList
}) {
  return (
    <p> { exchangesAccountList } </p>
  );
}

function mapStateToProps(state) {
  return {
    exchangesAccountList: state.addExchange.exchange,
  };
}

export default connect(mapStateToProps)(ExchangesAccount);
