import React from 'react';
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
    <MenuItem
      eventKey="1"
      onClick={(event) => setExchanges(event.target.value)}
      value="gemini"
    >
      Gemini
    </MenuItem>
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

ExchangesList.propTypes = {
  exchangesAccountList: React.PropTypes.object,
  setExchanges: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesList);
