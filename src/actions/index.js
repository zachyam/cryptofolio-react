/* eslint-disable max-len */
import { setExchanges } from './setExchanges';
import { authorizeExchange } from './authorizeExchange';
import { fetchTopCurrencies } from './fetchTopCurrencies';
import { fetchCoinSearchTerm } from './fetchCoinSearchTerm';
import { addCoinInfo } from './addCoinInfo';
import { saveCoinInfo } from './saveCoinInfo';
import { saveEditedCoinInfo } from './saveEditedCoinInfo';
import { deleteCoinInfo } from './deleteCoinInfo';
import { login, loginUserRequest, loginUserSuccess, loginUserFailure } from './auth';

export {
  setExchanges,
  authorizeExchange,
  fetchTopCurrencies,
  fetchCoinSearchTerm,
  addCoinInfo,
  saveCoinInfo,
  saveEditedCoinInfo,
  deleteCoinInfo,
  login,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
};
