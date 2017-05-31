/* eslint-disable */
import { fromJS } from 'immutable';

export function fetchTopCurrencies(state = fromJS({}), action) {
  switch (action.type) {
    case 'FETCH_TOP_RESULTS':
      return state.set('isFetching', true);
    case 'FETCH_TOP_SUCCESS':
      return state.set('list', action.list);
    case 'FETCH_TOP_ERROR':
      return state
        .set('isFetching': false)
        .set('errorMessage', action.message);
    default:
      return state;
  }
}
