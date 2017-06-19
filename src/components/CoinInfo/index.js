/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Modal, FormGroup, ControlLabel, FormControl, FieldGroup } from 'react-bootstrap';

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
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
            <Button bsStyle="success">Buy</Button>
            <Button bsStyle="danger">Sell</Button>
            <br/>
            <br/>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Amount"
              placeholder={coin}
            />
            <br/>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Exchange</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
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
