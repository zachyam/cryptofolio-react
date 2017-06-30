import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';
import { addCoin } from './addCoin';
import { reducer as formReducer } from 'redux-form';

export const reducers = {
  fetchCoinSearchTerm,
  fetchTopCurrencies,
  addCoin,
  form: formReducer,
  routing: routerReducer
};
