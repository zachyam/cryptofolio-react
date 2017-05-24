/* eslint-disable */
import axios from 'axios';

export function authorizeExchange() {
  return (authorizeExchangeDispatch) => {
    axios.get(`https://www.coinbase.com/oauth/authorize?response_type=code&client_id=4b65343d21b7abeefa0d6bdc253a87e95bf57d58c3ae29714a41fb9502d54f04`)
      .then(response => {
        if (response.status != 200) {
          authorizeExchangeDispatch(loginError(response));
          //return Promise.reject(user);
        } else {
          //localStorage.setItem('id_token', user.id_token);
          //localStorage.setItem('id_token', user.access_token);
          //b6e317e1b4109e6640523fe23f96fcc36b9550f3d5df1de7409044da0415770e
          window.location.href = response.config.url;
          let pollTimer = window.setInterval(function() {
           try {
             if (window.document.URL.indexOf('code=') != -1) {
               window.clearInterval(pollTimer);
               console.log('3')
             }
            } catch(e) {
            }
           }, 100);

        }
      }).catch(err => console.log("Error: ", err))
    }
}

function requestLogin() {
  return {
    type: 'REQUEST_LOGIN',
    isFetching: true,
    isAuthenticated: false,
  }
}

function receiveLogin(user) {
  return {
    type: 'RECEIVE_LOGIN',
    isFetching: false,
    isAuthenticated: true,
    id_toke: user.id_token
  }
}

function loginError(message) {
  return {
    type: 'LOGIN_ERROR',
    isFetchingL: false,
    isAuthenticated: false,
    message
  }
}
