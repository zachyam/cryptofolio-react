import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Table } from 'react-bootstrap';

class CurrencyList extends Component {

  componentDidMount() {
    const { fetchTopCurrencies } = this.props;
    fetchTopCurrencies();
  }

  render() {
    const divStyle = {
      textAlign: 'left'
    };
    let { list } = this.props;
    list = list.get('list');
    return (
      <div>
        <h2 style={divStyle}> Popular </h2>
        { !list &&
          <h2>Loading...</h2>
        }
        { list &&
        <Table responsive>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Currency</th>
              <th>Value</th>
              <th>Gain</th>
            </tr>
          </thead>
          <tbody style={divStyle}>
            <tr>
              <td>1</td>
              <td>{list[0].name}</td>
              <td>{list[0].market_cap_usd}</td>
              <td>{list[0].percent_change_24h}%</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td>5.0%</td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td>5.0%</td>
            </tr>
          </tbody>
      </Table>
    }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.fetchTopCurrencies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopCurrencies: bindActionCreators(actions.fetchTopCurrencies, dispatch)
  };
}

CurrencyList.propTypes = {
  list: React.PropTypes.object,
  fetchTopCurrencies: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
