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
        console.log('txn', txn);
        console.log('indexCoin', indexCoin);
        console.log('values.values', values.values);

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
            {coins[index]['formCount'] > 0 && (coins[index]['form']).map((txn, arrayIndex) =>
              <tr>
                <td>
                  <Row>
                    {txn['TxnType'] == 'Bought' && <span style={bought}> {txn['TxnType']}</span>}
                    {txn['TxnType'] == 'Sold' && <span style={sold}> {txn['TxnType']}</span>}
                  </Row>
                  <br/>
                  <Row>
                    {txn['CoinAmount']}
                  </Row>
                </td>
                <td>
                  <br/>
                  <br/>
                  {txn['AmountBoughtWith']} {txn['AmountBoughtWithType']} @ {txn['AmountBoughtWithEquivType']} {txn['AmountBoughtWithEquiv']}
                </td>
                <td>
                  <Row>
                    Date
                  </Row>
                  <br/>
                  <Row>
                    {txn['Date']}
                  </Row>
                </td>
                <td>
                  <br/>
                  <Row>
                    <CoinModal type='Edit' coin={arrayIndex} index={index} onSubmit={this.submit(index, arrayIndex, 'edit')}/>
                    <Button bsStyle="danger" onClick={this.submit(index, arrayIndex, 'delete')} >Delete</Button>
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
