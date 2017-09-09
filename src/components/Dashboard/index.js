/* eslint-disable */
import React, { Component } from 'react';
var axios = require('axios');
import { connect } from 'react-redux';
import MyCoins from '../MyCoins';
import { browserHistory } from 'react-router';

class Dashboard extends Component {

  // componentDidMount() {
  //   axios.post('http://localhost:5000/dashboard', {
  //     data : {
  //
  //     }
  //   })
  //   .then(function (response, status) {
  //     console.log(response.data.result)
  //     if(!response.data.result){
  //       browserHistory.push('/login');
  //     } else {
  //       // need to display error message
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //
  // };

  render() {
    return (
      <MyCoins />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
