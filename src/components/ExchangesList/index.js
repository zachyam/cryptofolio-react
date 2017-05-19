import React from 'react';
import '../../css/paper-dashboard.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

function ExchangesList({
  setExchanges,
}) {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     exchanges,
  //   };
  //
  //   this.onChange = this.onChange.bind(this);
  // }
  //
  // onChange(e) {
  //   if (!selectedExchanges.includes(e.target.value)) {
  //     selectedExchanges.push(e.target.value);
  //   }
  //   this.setState = { selectedExchanges };
  //
  //   console.log("STATE", this.state);
  //   console.log("SELECTED", selectedExchanges);
  // }

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
