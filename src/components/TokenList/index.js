import React, { Component } from 'react';
import { connect } from 'react-redux';

class TokenList extends Component {

  render() {
    return (
      <h1> Test </h1>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenList);
