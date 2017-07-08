/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overview from '../Overview';
import CoinInfo from '../CoinInfo';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

class MyCoins extends Component {

  render() {
    let { coins } = this.props;
    const divStyle = {
      textAlign: 'left',
    };
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="overview">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem style={divStyle} eventKey="overview">
                  Overview
                </NavItem>
                { Object.keys(coins).map((coin, index) =>
                  <NavItem style={divStyle} eventKey={coins[coin]}>
                    {coins[coin]['name']}
                  </NavItem>
                )}
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="overview">
                  <Overview coinList={coins}/>
                </Tab.Pane>
                { Object.keys(coins).map((coin, index) =>
                  <Tab.Pane eventKey={coins[coin]}>
                    <CoinInfo coin={coins[coin]['name']} index={coin} />
                  </Tab.Pane>
                )}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.addCoin
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCoins);
