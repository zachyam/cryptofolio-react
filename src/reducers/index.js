import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';
import { addCoin } from './addCoin';

export const reducers = {
  fetchCoinSearchTerm,
  fetchTopCurrencies,
  addCoin,
  routing: routerReducer
};
