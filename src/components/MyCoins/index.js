/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                  <NavItem style={divStyle} eventKey={index}>
                    {coins[coin]}
                  </NavItem>
                )}
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="overview">
                  Overview
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Tab 2 content
                </Tab.Pane>
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
