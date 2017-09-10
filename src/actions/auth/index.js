/* eslint-disable */
import axios from 'axios';
import { parseJSON, get_token, create_user } from '../../utils';
import { browserHistory } from 'react-router';

export function loginUserRequest() {
  return {
    type: 'LOGIN_USER_REQUEST',
  };
}

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: 'LOGIN_USER_SUCCESS',
    token: token
  };
}


export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
      type: 'LOGIN_USER_FAILURE',
      status: error.response.status,
      statusText: error.response.statusText,
  };
}

export function login(email, password) {
  return (loginDispatch) => {
    loginDispatch(loginUserRequest());
    return get_token(email, password)
      .then(parseJSON)
      .then(response => {
        try {
          loginDispatch(loginUserSuccess(response.token));
          console.log(response.token);
          browserHistory.push('/dashboard');
        } catch (e) {
          alert(e);
          loginDispatch(loginUserFailure({
              response: {
                  status: 403,
                  statusText: 'Invalid token',
              },
          }));
      }
    })
    .catch(error => {
      loginDispatch(loginUserFailure({
          response: {
              status: 403,
              statusText: 'Invalid username or password',
          },
      }));
    });
  };
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT_USER',
  };
}

export function logoutAndRedirect() {
  return (logoutAndRedirectDispatch) => {
    logoutAndRedirectDispatch(logout());
    browserHistory.push('/');
  };
}

export function registerUserRequest() {
  return {
      type: 'REGISTER_USER_REQUEST',
  };
}

export function registerUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
      type: 'REGISTER_USER_SUCCESS',
      token: token
  };
}

export function registerUserFailure(error) {
  localStorage.removeItem('token');
  return {
      type: 'REGISTER_USER_FAILURE',
      status: error.response.status,
      statusText: error.response.statusText,
  };
}

export function registerUser(email, password) {
  return function (registerUserDispatch) {
    registerUserDispatch(registerUserRequest());
    return create_user(email, password)
        .then(parseJSON)
        .then(response => {
            try {
                registerUserDispatch(registerUserSuccess(response.token));
                browserHistory.push('/dashboard');
            } catch (e) {
                registerUserDispatch(registerUserFailure({
                    response: {
                        status: 403,
                        statusText: 'Invalid token',
                    },
                }));
            }
        })
        .catch(error => {
            registerUserDispatch(registerUserFailure({
                response: {
                    status: 403,
                    statusText: 'User with that email already exists',
                },
            }
            ));
        });
  };
}
