import React from 'react';
import '../../css/paper-dashboard.css';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

function ExchangesAccount({ exchangesAccountList }) {
  return (
    <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>My Exchanges</th>
      </tr>
    </thead>
    <tbody>
      {exchangesAccountList.map(item =>
      <tr>
        <td>1</td>
        <td>{item}</td>
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

export default connect(mapStateToProps)(ExchangesAccount);
