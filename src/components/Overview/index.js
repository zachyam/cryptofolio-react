/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Overview extends Component {

  render() {
    const { coinList } = this.props;
    console.log(coinList);
    return (
      <div>
        { Object.keys(coinList).length == 0 &&
          <h3> Your portfolio is currently empty. Add more coins using the tab above. </h3>
        }
      </div>
    );
  }
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapDispatchToProps)(Overview);
