import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';
import { coinInfo } from './coinInfo';
import { reducer as formReducer } from 'redux-form';
import { auth } from './auth';


export const reducers = {
  fetchCoinSearchTerm,
  fetchTopCurrencies,
  coinInfo,
  auth,
  form: formReducer,
  routing: routerReducer
};
