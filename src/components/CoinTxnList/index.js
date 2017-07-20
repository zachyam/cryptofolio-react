/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Row, Col, Nav, NavItem, Table } from 'react-bootstrap';

class CoinTxnList extends Component {

  render() {
    let { coins, index } = this.props;
    const tableStyle = {
      marginTop: '10%'
    };
    const bought = {
      color: 'green'
    };
    const sold = {
      color: 'red'
    };
    return (
      <div>
        <Table responsive style={tableStyle}>
          <tbody>
            <thead></thead>
            {coins[index]['formCount'] > 0 && Object.keys(coins[index]['form']).map((txn, key) =>
              <tr key={key}>
                <td>
                <Col xs={4} md={4}>
                  <Row>
                    {coins[index]['form'][txn]['values']['TxnType'] == 'Bought' && <span style={bought}> {coins[index]['form'][txn]['values']['TxnType']}</span>}
                    {coins[index]['form'][txn]['values']['TxnType'] == 'Sold' && <span style={sold}> {coins[index]['form'][txn]['values']['TxnType']}</span>}
                  </Row>
                  <br/>
                  <Row>
                    {coins[index]['form'][txn]['values']['CoinAmount']}
                  </Row>
                </Col>
                </td>
                <td>
                <br/>
                <br/>
                <Col xs={4} md={4}>
                  {coins[index]['form'][txn]['values']['AmountBoughtWith']} @ {coins[index]['form'][txn]['values']['AmountBoughtWithEquiv']} {coins[index]['form'][txn]['values']['AmountBoughtWithType']}
                </Col>
                </td>
                <td>
                <br/>
                <br/>
                <Col xs={4} md={4}>
                  {coins[index]['form'][txn]['values']['Date']}
                </Col>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.addCoin
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTxnList);
