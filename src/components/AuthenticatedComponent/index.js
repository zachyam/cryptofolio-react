/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Dashboard from '../Dashboard';
var axios = require('axios');
import * as actions from '../../actions/index';

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
        const { isAuthenticated, loginUserSuccess } = this.props;
        if (!isAuthenticated) {
          const token = localStorage.getItem('token');
          if (token) {
            loginUserSuccess(token);
          }
          else {
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
        const { isAuthenticated } = this.props;
        return (
          <Dashboard />
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
      token: state.auth.token,
      userName: state.auth.userName,
      isAuthenticated: state.auth.isAuthenticated,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      loginUserSuccess: bindActionCreators(actions.loginUserSuccess, dispatch),
    };
  }
