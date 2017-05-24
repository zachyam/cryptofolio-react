import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';

export const reducers = {
  fetchTopCurrencies,
  routing: routerReducer
};
