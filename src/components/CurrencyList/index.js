/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Table, Button, FormGroup, FormControl } from 'react-bootstrap';

class CurrencyList extends Component {

  constructor(props){
      super(props);
      this.state = {
          'searching': false,
          'searchTerm': '',
          'searchResults': {}
      };
      this.search = this.search.bind(this);
  }

  search(event) {
    let { list } = this.props;
    list = list.get('list');
    this.setState({ 'searching': true });
    this.setState({ 'searchTerm': event.target.value }, () => {
      let searchResults = [];
      Object.keys(list).map((coin, item) => {
        if (list[item].name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
          searchResults.push(list[item]);
        }
      });
      this.setState({ 'searchResults': searchResults });
    })
  }

  componentDidMount() {
    const { fetchTopCurrencies } = this.props;
    fetchTopCurrencies();
  }

  render() {
    const { fetchTopCurrencies, addCoinInfo } = this.props;
    const divStyle = {
      textAlign: 'left',
      marginTop: '0px'
    };
    let { list } = this.props;
    list = list.get('list');
    //searchTerm = searchTerm.get('searchTerm');
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
                  onChange={this.search}

                />
              </FormGroup>
            </div>
          </div>
        </div>

        { !list && !this.state.searching &&
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
            { !this.state.searchTerm && Object.keys(list).map((item, index) =>
              <tr key={index}>
                <td>{list[item].rank}</td>
                <td>{list[item].name}</td>
                <td>{list[item].market_cap_usd}</td>
                <td>{list[item].percent_change_24h}%</td>
                <th><Button bsStyle="success" onClick={function() { addCoinInfo(index, list[item].name, list[item].symbol); }}>+</Button></th>
              </tr>
            )}
            { this.state.searching && Object.keys(this.state.searchResults).map((item, index) =>
              <tr key={index}>
                <td>{this.state.searchResults[item].rank}</td>
                <td>{this.state.searchResults[item].name}</td>
                <td>{this.state.searchResults[item].market_cap_usd}</td>
                <td>{this.state.searchResults[item].percent_change_24h}%</td>
                <th><Button bsStyle="success" onClick={function() { addCoinInfo(index, list[item].name, list[item].symbol); }}>+</Button></th>
              </tr>

            )}

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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopCurrencies: bindActionCreators(actions.fetchTopCurrencies, dispatch),
    addCoinInfo: bindActionCreators(actions.addCoinInfo, dispatch),
  };
}

// CurrencyList.propTypes = {
//   list: React.PropTypes.object,
//   fetchTopCurrencies: React.PropTypes.func,
//   searchCoin: React.PropTypes.func,
//   addCoin: React.PropTypes.func,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
