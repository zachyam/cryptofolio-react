/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Row, Button, Col, Modal, FormGroup, ControlLabel, FormControl, FieldGroup } from 'react-bootstrap';

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false,
                   txn: '',
                   coinAmount: '',
                   coinCurrencyAmount: '',
                   coinCurrency: 'USD',
                };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.setBought = this.setBought.bind(this);
    this.setSold = this.setSold.bind(this);
    this.updateCoinAmount = this.updateCoinAmount.bind(this);
    this.updateCoinCurrency = this.updateCoinCurrency.bind(this);
    this.updateCoinCurrencyAmount = this.updateCoinCurrencyAmount.bind(this);

  };
  setBought () {
    this.setState({ txn: 'Bought' })
  };

  setSold () {
    this.setState({ txn: 'Sold' })
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  updateCoinAmount(e) {
    this.setState({ coinAmount: e.target.value });
  };

  updateCoinCurrency(e) {
    this.setState({ coinCurrency: e.target.value });
  };

  updateCoinCurrencyAmount(e) {
    this.setState({ coinCurrencyAmount: e.target.value });
  };

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    const { coin } = this.props;
    const btnStyle = {
      marginRight:'10px'
    }
    return (
      <div>
        <h1> {coin} </h1>
        <Col sm={3}>
          <Button onClick={this.open} bsStyle="success">Add Transaction</Button>
          <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a {coin} transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={6} md={6}>
                <Button style={btnStyle} bsStyle="success" onClick={this.setBought}>Bought</Button>
                <Button bsStyle="danger" onClick={this.setSold}>Sold</Button>
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>
              <Col xs={6} md={6}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label={this.state.txn}
                  placeholder={coin}
                  value={this.state.coinAmount}
                  onChange={this.updateCoinAmount}
                />
              </Col>
              <Col xs={6} md={6}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="for"
                  placeholder="Amount"
                  value={this.state.coinCurrencyAmount}
                  onChange={this.updateCoinCurrencyAmount} />
                  <FormControl
                    componentClass="select"
                    value={this.state.value} onChange={this.updateCoinCurrency}>
                    <option value="USD">USD</option>
                    <option value="Bitcoin">BTC</option>
                    <option value="Ethereum">ETH</option>
                  </FormControl>
              </Col>
            </Row>
            <br/>
            <FormGroup controlId="formControlsSelect">
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Date"
                placeholder="MM/DD/YY"
              />
            </FormGroup>
            <br/>
            { this.state.coinCurrency !== 'USD' &&
              <Row>
                <Col xs={8} md={8}>
                  <h5> <b>Value of {this.state.coinCurrency} at time of transaction </b></h5>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    placeholder="Amount"
                  />
                  <FormControl componentClass="select">
                    <option value="select">USD</option>
                    <option value="select">EUR</option>
                  </FormControl>
                </Col>
              </Row>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button bsStyle="success"> Save </Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinInfo);
