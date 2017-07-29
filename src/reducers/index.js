import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';
import { coinInfo } from './coinInfo';
import { reducer as formReducer } from 'redux-form';

export const reducers = {
  fetchCoinSearchTerm,
  fetchTopCurrencies,
  coinInfo,
  form: formReducer,
  routing: routerReducer
};
