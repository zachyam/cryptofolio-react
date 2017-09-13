/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tabs from '../Tabs';
import { Row, Button } from 'react-bootstrap';
import * as actions from '../../actions/index';

class Root extends Component {

  constructor(props) {
     super(props);
     this.state = {
         open: false,
     };

   }

   componentDidMount() {
     const { loginUserSuccess } = this.props;
     const token = localStorage.getItem('token');
     if (token) {
       loginUserSuccess(token);
     }
   }


  render() {
    const inlineFlex = {
      display: 'inline-flex',
    }
    const { loginUser } = this.props;
    return (
      <div className="App">
        <br />
        <Row className="clearfix" style={inlineFlex}>
          <h3>CryptoFolio</h3>
        </Row>
        <br />
        <br />
        <div className="row">
          <Tabs loginUserToken={loginUser.token}/>
        </div>
        <div className="container" >
          <div className="row">
            <br/>
            <br/>
            <br/>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    loginUser: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUserSuccess: bindActionCreators(actions.loginUserSuccess, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Root);
