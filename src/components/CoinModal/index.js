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
                   amountBoughtWithType: '',
                   amountBoughtWithEquiv: '',
                   amountBoughtWithEquivType: '',
                   updateAmountBoughtWithEquivType: ''
                };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.updateAmountBoughtWithType = this.updateAmountBoughtWithType.bind(this);
    this.updateAmountBoughtWithEquivType = this.updateAmountBoughtWithEquivType.bind(this);
    this.TxnType = this.TxnType.bind(this);
    this.CoinAmount = this.CoinAmount.bind(this);
    this.AmountBoughtWith = this.AmountBoughtWith.bind(this);
    this.DateComponent = this.DateComponent.bind(this);
    this.AmountBoughtWithType = this.AmountBoughtWithType.bind(this);
    this.AmountBoughtWithEquiv = this.AmountBoughtWithEquiv.bind(this);
    this.AmountBoughtWithEquivType = this.AmountBoughtWithEquivType.bind(this);
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  setBought(input) {
    input.onChange('Bought');
    this.setState({ txn: 'Bought' });
  };

  setSold(input) {
    input.onChange('Sold');
    this.setState({ txn: 'Sold' });
  };

  updateAmountBoughtWithType(input, e) {
    input.onChange(e.target.value);
    this.setState({ amountBoughtWithType: e.target.value });
  };

  updateAmountBoughtWithEquivType(input, e) {
    input.onChange(e.target.value);
    this.setState({ updateAmountBoughtWithEquivType: e.target.value });
  };

  TxnType({input}) {
    const btnStyle = {
      marginRight: '10px'
    }
    const { setBought, setSold } = this.props;
    return(
      <form>
        <Button style={btnStyle} bsStyle="success" onClick={()=> this.setBought(input)}>Bought</Button>
        <Button bsStyle="danger" onClick={()=> this.setSold(input)}>Sold</Button>
      </form>
    )
  };

  CoinAmount({input, coin}) {
    return(
      <form>
        <FormControl
          {...input}
          input="text"
          placeholder={coin}
        />
      </form>
    )
  };

  AmountBoughtWith({input}) {
    return(
      <form>
        <FormControl
          {...input}
          input="text"
        />
      </form>
    )
  };

  AmountBoughtWithType({input}) {
    return(
      <form>
        <FormGroup>
          <FormControl componentClass="select" placeholder="USD" onChange={(e)=> this.updateAmountBoughtWithType(input, e)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </FormControl>
        </FormGroup>
      </form>
    )
  };

  DateComponent({input}) {
    return(
      <form>
        <FormControl
          {...input}
          input="text"
          placeholder="MM/DD/YY"
        />
      </form>
    )
  };

  AmountBoughtWithEquiv({input}) {
    return(
      <form>
        <FormControl
          {...input}
          input="text"
        />
      </form>
    )
  };

  AmountBoughtWithEquivType({input}) {
    return(
      <form>
        <FormGroup>
          <FormControl componentClass="select" onChange={(e)=> this.updateAmountBoughtWithEquivType(input, e)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </FormControl>
        </FormGroup>
      </form>
    )
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
    const { handleSubmit, coin, type, coins, index } = this.props;
    const labelStyle = {
      width: '100%'
    }
    const marginRight = {
      marginRight: '2%'
    };
    return (
      <div>
        { type == 'Add' && <Button onClick={this.open} bsStyle="success">Add Transaction</Button> }
        { type == 'Edit' && <Button onClick={this.open} style={marginRight} bsStyle="info">Edit</Button>}
        <Modal show={this.state.showModal} onHide={this.close}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>
                {type == 'Add' && <h4> {type} a {coin} Transaction </h4>}
                {type == 'Edit' && <h4> {type} Transaction </h4>}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Field
                name="TxnType"
                component={this.TxnType}
              />
              <br/>
              <br/>
              <Row>
                <Col xs={6} md={6}>
                  { type == 'Add' && <label>Amount of {coin}</label> }
                  { type == 'Edit' && <label>Amount of {coins[index]['name']}</label>}
                  <div>
                    <Field
                      name="CoinAmount"
                      component={this.CoinAmount}
                      coin={coin}
                    />
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <label>Amount {this.state.txn}</label>
                  <Field
                    name="AmountBoughtWith"
                    component={this.AmountBoughtWith}
                  />
                </Col>
                <Col xs={3} md={3}>
                  <label>Currency </label>
                  <Field
                    name="AmountBoughtWithType"
                    component={this.AmountBoughtWithType}
                  />
                </Col>
              </Row>
              <br/>
              <label style={labelStyle}>Date of Transaction</label>
              <Field
                name="Date"
                component={this.DateComponent}
              />
              <br/>
              { (this.state.amountBoughtWithType !== 'USD' && this.state.amountBoughtWithType !== 'EUR') &&
                <Row>
                  <Col xs={6} md={6}>
                    <label> Value of {this.state.amountBoughtWithType} at time of transaction </label>
                    <Field
                      name="AmountBoughtWithEquiv"
                      component={this.AmountBoughtWithEquiv}
                    />
                  </Col>
                  <Col  xs={6} md={6}>
                    <label> Currency </label>
                    <Field
                      name="AmountBoughtWithEquivType"
                      component={this.AmountBoughtWithEquivType}>
                    </Field>
                  </Col>
                </Row>
              }
              <br />
              <Modal.Footer>
                <Button onClick={this.close} type="submit" bsStyle="success">Submit</Button>
              </Modal.Footer>
            </Modal.Body>
          </form>
        </Modal>
      </div>
    );
  }
}



CoinModal = reduxForm({
  form: 'coininfo', // a unique identifier for this form
})(CoinModal);

function mapDispatchToProps() {
  return {
  };
}

function mapStateToProps(state) {
  return {
    coins: state.coinInfo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinModal);
