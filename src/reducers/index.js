import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';

export const reducers = {
  fetchCoinSearchTerm,
  fetchTopCurrencies,
  routing: routerReducer
};
