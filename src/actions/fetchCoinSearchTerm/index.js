/* eslint-disable */
import axios from 'axios';

export function fetchCoinSearchTerm(searchTerm) {
  return (fetchCoinSearchTermDispatch) => {
    if (searchTerm === false) {
      fetchCoinSearchTermDispatch(setSearchTermFalse());
    }
    fetchCoinSearchTermDispatch(fetchCoinSearchResults());
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${searchTerm}`)
      .then(response => {
        if (response.status != 200) {
          fetchCoinSearchTermDispatch(fetchCoinSearchError(response));
          //return Promise.reject(user);
        } else {
          //localStorage.setItem('id_token', user.id_token);
          //localStorage.setItem('id_token', user.access_token);
          fetchCoinSearchTermDispatch(fetchCoinSearchSuccess(response.data[0]));
        }
      }).catch(err => console.log("Error: ", err))
    }
}

function setSearchTermFalse() {
  return {
    type: 'SET_FALSE',
  }
}

function fetchCoinSearchResults() {
  return {
    type: 'FETCH_SEARCH_RESULTS',
    isFetching: true,
  }
}

function fetchCoinSearchSuccess(searchObject) {
  return {
    type: 'FETCH_SEARCH_SUCCESS',
    isFetching: false,
    searchObject
  }
}

function fetchCoinSearchError(message) {
  return {
    type: 'FETCH_SEARCH_ERROR',
    isFetching: false,
    message
  }
}
