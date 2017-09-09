/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tabs from '../Tabs';
import { Button } from 'react-bootstrap';
import * as actions from '../../actions/index';

class Root extends Component {

  constructor(props) {
     super(props);
     this.logout = this.logout.bind(this);
     this.state = {
         open: false,
     };

   }

  logout() {
    const { logoutAndRedirect } = this.props;
    logoutAndRedirect();
    this.setState({
      open: false,
    });
  }

  render() {
    const { loginUser } = this.props;
    return (
      <div className="App">
        <br />
        <h3>CryptoFolio</h3>
        { loginUser.token ? <Button onClick={() => this.logout()}> Logout </Button> : null }
        <br />
        <br />
        <div className="row">
          <Tabs/>
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
    logoutAndRedirect: bindActionCreators(actions.logoutAndRedirect, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Root);
