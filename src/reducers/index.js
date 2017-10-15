import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { coinInfo } from './coinInfo';
import { reducer as formReducer } from 'redux-form';
import { auth } from './auth';


export const reducers = {
  fetchTopCurrencies,
  coinInfo,
  auth,
  form: formReducer,
  routing: routerReducer
};
