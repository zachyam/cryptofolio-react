/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Overview extends Component {

  render() {

    return (
      <div>
        <h1> Overview </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
