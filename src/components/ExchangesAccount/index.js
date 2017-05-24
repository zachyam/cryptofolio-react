import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

function ExchangesAccount({ exchangesAccountList, authorizeExchange }) {
  return (
    <Table responsive>
    <thead>
      <tr>
        <th>My Exchanges</th>
      </tr>
    </thead>
    <tbody>
      {exchangesAccountList.map(item =>
      <tr>
        <th>{item}</th>
        <th>
        <Button
          bsStyle="primary"
          onClick={() => authorizeExchange()}
        >
          Authorize
        </Button></th>
      </tr>
    )}
    </tbody>
  </Table>
  );
}


function mapStateToProps(state) {
  return {
    exchangesAccountList: state.addExchange,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authorizeExchange: bindActionCreators(actions.authorizeExchange, dispatch)
  };
}

ExchangesAccount.propTypes = {
  exchangesAccountList: React.PropTypes.object,
  authorizeExchange: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesAccount);
