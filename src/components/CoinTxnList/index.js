/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import CoinModal from '../CoinModal'
import { Tab, Row, Button, Col, Nav, NavItem, Table } from 'react-bootstrap';

class CoinTxnList extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  };

  submit(indexCoin, txn, type) {
    const { saveEditedCoinInfo, deleteCoinInfo, index, values } = this.props;
    return event => {
      if (type == 'edit') {
        saveEditedCoinInfo(indexCoin, txn, values.values);
      }
      if (type == 'delete') {
        deleteCoinInfo(indexCoin, txn);
      }
    }
  }

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
                  <Row>
                    {coins[index]['form'][txn]['values']['TxnType'] == 'Bought' && <span style={bought}> {coins[index]['form'][txn]['values']['TxnType']}</span>}
                    {coins[index]['form'][txn]['values']['TxnType'] == 'Sold' && <span style={sold}> {coins[index]['form'][txn]['values']['TxnType']}</span>}
                  </Row>
                  <br/>
                  <Row>
                    {coins[index]['form'][txn]['values']['CoinAmount']}
                  </Row>
                </td>
                <td>
                  <br/>
                  <br/>
                  {coins[index]['form'][txn]['values']['AmountBoughtWith']} {coins[index]['form'][txn]['values']['AmountBoughtWithType']} @ {coins[index]['form'][txn]['values']['AmountBoughtWithEquivType']} {coins[index]['form'][txn]['values']['AmountBoughtWithEquiv']}
                </td>
                <td>
                  <Row>
                    Date
                  </Row>
                  <br/>
                  <Row>
                    {coins[index]['form'][txn]['values']['Date']}
                  </Row>
                </td>
                <td>
                  <br/>
                  <Row>
                    <CoinModal type='Edit' coin={txn} index={index} onSubmit={this.submit(index, txn, 'edit')} />
                    <Button bsStyle="danger" onClick={this.submit(index, txn, 'delete')} >Delete</Button>
                  </Row>
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
    coins: state.coinInfo,
    values: state.form.coininfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveEditedCoinInfo: bindActionCreators(actions.saveEditedCoinInfo, dispatch),
    deleteCoinInfo: bindActionCreators(actions.deleteCoinInfo, dispatch),
  };
}

CoinTxnList.propTypes = {
  saveEditedCoinInfo: React.PropTypes.func,
  deleteCoinInfo: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTxnList);
