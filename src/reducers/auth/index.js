/* eslint-disable */
import jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    isRegistering: false,
    isRegistered: false,
    registerStatusText: null,
};

export function loginUser(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST':
      return Object.assign({}, state, {
        isAuthenticating: true,
        statusText: null,
      });
    case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        userName: jwtDecode(action.token).email,
        statusText: 'You have been successfully logged in.',
      });
    case 'LOGIN_USER_FAILURE':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${action.status} ${action.statusText}`,
      });
    default:
      return state
  }
}

function registerUser(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_USER_REQUEST':
      return Object.assign({}, state, {
        isRegistering: true,
      });
    case 'REGISTER_USER_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        isRegistering: false,
        token: action.token,
        userName: jwtDecode(action.token).email,
        registerStatusText: 'You have been successfully logged in.',
      });
    case 'REGISTER_USER_FAILURE':
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
        userName: null,
        registerStatusText: `Register Error: ${action.status} ${action.statusText}`,
      });
    default:
      return state
  }
}
