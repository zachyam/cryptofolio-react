import React from 'react';
import '../../css/paper-dashboard.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

function ExchangesList({
  setExchanges
}) {
  return (
  <DropdownButton title="Select Exchanges" id="bg-nested-dropdown">
    <MenuItem
      eventKey="1"
      onClick={(event) => setExchanges(event.target.value)}
      value="coinbase"
    >
      Coinbase
    </MenuItem>
    {/* <MenuItem
      eventKey="2"
      onClick={this.onChange}
      value="gemini"
    >
    Gemini
  </MenuItem> */}
  </DropdownButton>
  );
}

function mapStateToProps(state) {
  return {
    exchangesAccountList: state.exchanges,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setExchanges: bindActionCreators(actions.setExchanges, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesList);
