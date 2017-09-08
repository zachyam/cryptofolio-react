/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
var axios = require('axios');

export function requireAuthentication(View) {

    class AuthenticatedComponent extends Component {
        componentWillMount() {
            this.checkAuth();
            this.state = {
                loaded_if_needed: false,
            };
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps);
        }

        checkAuth(props = this.props) {
            if (!props.isAuthenticated) {
              const token = localStorage.getItem('token');
              if (!token) {
                browserHistory.push('/login');
              }

                    // axios.post('api/is_token_valid', {
                    //     headers: {
                    //         'Accept': 'application/json', // eslint-disable-line quote-props
                    //         'Content-Type': 'application/json',
                    //     },
                    //     body: JSON.stringify({ token }),
                    // })
                    //     .then(res => {
                    //         if (res.status === 200) {
                    //             this.props.loginUserSuccess(token);
                    //             this.setState({
                    //                 loaded_if_needed: true,
                    //             });
                    //         } else {
                    //             browserHistory.push('/login');
                    //         }
                    //     });


            } else {
                this.setState({
                    loaded_if_needed: true,
                });
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated && this.state.loaded_if_needed
                        ? <View {...this.props} />
                        : null
                    }
                </div>
            );

        }

    }

    AuthenticatedComponent.propTypes = {
        loginUserSuccess: React.PropTypes.func,
        isAuthenticated: React.PropTypes.bool,
    };

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

  }

  function mapStateToProps(state) {
    return {
      token: state.token,
      userName: state.userName,
      isAuthenticated: state.isAuthenticated,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      //saveCoinInfo: bindActionCreators(actions.saveCoinInfo, dispatch),
    };
  }
