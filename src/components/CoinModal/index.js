/* eslint-disable */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Row, Button, Col, Modal, FormGroup, ControlLabel, FormControl, FieldGroup } from 'react-bootstrap';

class CoinModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false,
                   txn: '',
                   coinAmount: '',
                   amountBoughtWith: '',
                   amountBoughtWithType: 'USD',
                   amountBoughtWithEquiv: '',
                   amountBoughtWithEquivType: ''
                };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.setBought = this.setBought.bind(this);
    this.setSold = this.setSold.bind(this);
    this.updateCoinAmount = this.updateCoinAmount.bind(this);
    this.updateAmountBoughtWith = this.updateAmountBoughtWith.bind(this);
    this.updateAmountBoughtWithType = this.updateAmountBoughtWithType.bind(this);
    this.updateAmountBoughtWithEquiv = this.updateAmountBoughtWithEquiv.bind(this);
    this.updateAmountBoughtWithEquivType = this.updateAmountBoughtWithEquivType.bind(this);

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

  updateAmountBoughtWith(e) {
    this.setState({ amountBoughtWith: e.target.value });
  };

  updateAmountBoughtWithType(e) {
    this.setState({ amountBoughtWithType: e.target.value });
  };

  updateAmountBoughtWithEquiv(e) {
    this.setState({ amountBoughtWithEquiv: e.target.value });
  };

  updateAmountBoughtWithEquivType(e) {
    this.setState({ amountBoughtWithEquivType: e.target.value });
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
    const { handleSubmit, coin } = this.props;
    const btnStyle = {
      marginRight:'10px'
    }
    const labelStyle = {
      width: '100%'
    }
    return (
      <div>
        <Button onClick={this.open} bsStyle="success">Add Transaction</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <form onSubmit={handleSubmit}>
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
                  <label>Amount of {coin}</label>
                  <div>
                    <Field
                      name="coinAmount"
                      component="input"
                      placeholder={coin}
                      value={this.state.coinAmount}
                      onChange={this.updateCoinAmount}
                    />
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <label style={labelStyle}>Amount {this.state.txn}</label>
                  <Field
                    name="amountBoughtWith"
                    component="input"
                    value={this.state.amountBoughtWith}
                    onChange={this.updateAmountBoughtWith} />
                    <Field
                      name="amountBoughtWithType"
                      component="select"
                      value={this.state.amountBoughtWithType}
                      onChange={this.updateAmountBoughtWithType}>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="Bitcoin">BTC</option>
                      <option value="Ethereum">ETH</option>
                    </Field>
                </Col>
              </Row>
              <br/>
              <FormGroup controlId="formControlsSelect">
                <label style={labelStyle}>Date of Transaction</label>
                <Field
                  name="date"
                  component="input"
                  type="text"
                  placeholder="MM/DD/YY"
                />
              </FormGroup>
              <br/>
              { (this.state.amountBoughtWithType !== 'USD' && this.state.amountBoughtWithType !== 'EUR') &&
                <Row>
                  <Col xs={8} md={8}>
                    <h5> <b>Value of {this.state.amountBoughtWithType} at time of transaction </b></h5>
                    <Field
                      name="amountBoughtWithEquiv"
                      component="input"
                      type="text"
                      value={this.state.amountBoughtWithEquiv}
                      onChange={this.state.updateAmountBoughtWithEquiv}
                    />
                    <Field
                      name="amountBoughtWithEquivType"
                      component="select"
                      value={this.state.updateAmountBoughtWithEquivType}
                      onChange={this.updateAmountBoughtWithEquivType}>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </Field>
                  </Col>
                </Row>
              }
              <br />
              <div>
                <button type="submit" >Submit</button>
              </div>
            </Modal.Body>
          </form>
        </Modal>
      </div>
    );
  }
}


export default reduxForm({
  form: 'coininfo', // a unique identifier for this form
})(CoinModal);
