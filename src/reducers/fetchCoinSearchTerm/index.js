/* eslint-disable */
import { fromJS } from 'immutable';

export function fetchCoinSearchTerm(state = fromJS({}), action) {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS':
      return state.set('isFetching', true);
    case 'FETCH_SEARCH_SUCCESS':
      return state.set('searchTerm', action.searchObject);
    case 'FETCH_SEARCH_ERROR':
      return state
        .set('isFetching': false)
        .set('errorMessage', action.message);
    default:
      return state;
  }
}
