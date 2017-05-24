/* eslint-disable */

function authorizeExchange(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case 'RECEIVE_LOGIN':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case 'LOGIN_ERROR':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    default:
      return state
  }
}
