/* eslint-disable */
import axios from 'axios';

export function fetchCoinSearchTerm(searchTerm) {
  return (fetchCoinSearchTermDispatch) => {
    fetchCoinSearchTermDispatch(fetchResults());
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${searchTerm}`)
      .then(response => {
        if (response.status != 200) {
          fetchCoinSearchTermDispatch(fetchError(response));
          //return Promise.reject(user);
        } else {
          //localStorage.setItem('id_token', user.id_token);
          //localStorage.setItem('id_token', user.access_token);
          fetchCoinSearchTermDispatch(fetchSuccess(response.data[0]));
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

function fetchSuccess(searchTerm) {
  return {
    type: 'FETCH_SUCCESS',
    isFetching: false,
    searchTerm
  }
}

function fetchError(message) {
  return {
    type: 'FETCH_ERROR',
    isFetching: false,
    message
  }
}
