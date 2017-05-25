/* eslint-disable */
import { fromJS } from 'immutable';

export function fetchCoinSearchTerm(state = fromJS({}), action) {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return state.set('isFetching', true);
    case 'FETCH_SUCCESS':
      return state.set('searchTerm', action.searchTerm);
    case 'FETCH_ERROR':
      return state
        .set('isFetching': false)
        .set('errorMessage', action.message);
    default:
      return state;
  }
}
