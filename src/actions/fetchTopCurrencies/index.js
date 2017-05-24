/* eslint-disable */
import axios from 'axios';

export function fetchTopCurrencies() {
  return (fetchTopCurrenciesDispatch) => {
    fetchTopCurrenciesDispatch(fetchResults());
    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(response => {
        if (response.status != 200) {
          fetchTopCurrenciesDispatch(fetchError(response));
          //return Promise.reject(user);
        } else {
          //localStorage.setItem('id_token', user.id_token);
          //localStorage.setItem('id_token', user.access_token);
          fetchTopCurrenciesDispatch(fetchSuccess(response.data));
        }
      }).catch(err => console.log("Error: ", err))
    }
}

function fetchResults() {
  return {
    type: 'FETCH_RESULTS',
    isFetching: true,
  }
}

function fetchSuccess(list) {
  return {
    type: 'FETCH_SUCCESS',
    isFetching: false,
    list
  }
}

function fetchError(message) {
  return {
    type: 'FETCH_ERROR',
    isFetching: false,
    message
  }
}
