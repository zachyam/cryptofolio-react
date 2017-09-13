/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import * as actions from '../../actions/index';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

   logout() {
     const { logoutAndRedirect } = this.props;
     logoutAndRedirect();
   }

  render() {
    const paddingRight = {
      paddingRight: '5%'
    };
    const marginLeft = {
      marginLeft: '5%'
    };
    return (
      <div className="row">
        <Link style ={paddingRight} to="/"><Button  bsStyle="primary">Coins</Button></Link>
        <Link to="/dashboard"><Button bsStyle="success">Dashboard</Button></Link>
        { this.props.loginUserToken ? <Button style ={marginLeft} onClick={() => this.logout()}> Logout </Button> : null }
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


export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
