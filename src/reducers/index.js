import { routerReducer } from 'react-router-redux';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';
import { coinInfo } from './coinInfo';
import { reducer as formReducer } from 'redux-form';
import { loginUser, registerUser } from './auth';


export const reducers = {
  fetchCoinSearchTerm,
  fetchTopCurrencies,
  coinInfo,
  loginUser,
  registerUser,
  form: formReducer,
  routing: routerReducer
};
