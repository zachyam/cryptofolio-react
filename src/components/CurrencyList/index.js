import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Table, Button, FormGroup, FormControl } from 'react-bootstrap';

class CurrencyList extends Component {

  componentDidMount() {
    const { fetchTopCurrencies } = this.props;
    fetchTopCurrencies();
  }

  render() {
    const { searchCoin } = this.props;
    const divStyle = {
      textAlign: 'left',
      marginTop: '0px'
    };
    let { list, searchTerm } = this.props;
    list = list.get('list');
    searchTerm = searchTerm.get('searchTerm');
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <h2 style={divStyle}> Popular </h2>
            </div>
            <div className="col-md-offset-8">
              <FormGroup >
                <FormControl
                  type="text"
                  placeholder="Search"
                  onChange={(e) => searchCoin(e.target.value)}
                />
              </FormGroup>
            </div>
          </div>
        </div>

        { !list && !searchTerm &&
          <h2>Loading...</h2>
        }
        { list &&
        <Table responsive>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Coin</th>
              <th>Value</th>
              <th>Gain</th>
            </tr>
          </thead>
          <tbody style={divStyle}>
            { !searchTerm && list.map(item =>
              <tr>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.market_cap_usd}</td>
                <td>{item.percent_change_24h}%</td>
                <th><Button bsStyle="success">+</Button></th>
              </tr>
            )}
            { searchTerm &&
              <tr>
                <td>{searchTerm.rank}</td>
                <td>{searchTerm.name}</td>
                <td>{searchTerm.market_cap_usd}</td>
                <td>{searchTerm.percent_change_24h}%</td>
                <th><Button bsStyle="success">+</Button></th>
              </tr>
            }
          </tbody>
      </Table>
      }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.fetchTopCurrencies,
    searchTerm: state.fetchCoinSearchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopCurrencies: bindActionCreators(actions.fetchTopCurrencies, dispatch),
    searchCoin: bindActionCreators(actions.fetchCoinSearchTerm, dispatch)
  };
}

CurrencyList.propTypes = {
  list: React.PropTypes.object,
  fetchTopCurrencies: React.PropTypes.func,
  searchCoin: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
