/* eslint-disable */
import React, { Component } from 'react';
var axios = require('axios');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';

class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.state = { email: '',
                   password: '',
                   redirectTo: ''
                };

  };

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  };

  onSubmit() {
    const { registerUser } = this.props;
    registerUser(this.state.email, this.state.password);
    // axios.post('http://localhost:5000/register', {
    //   data : {
    //     email: this.state.email,
    //     password: this.state.password
    //   }
    //
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  };

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.onSubmit}>
              Register
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: bindActionCreators(actions.registerUser, dispatch),
  };
}

Register.propTypes = {
  registerUser: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
