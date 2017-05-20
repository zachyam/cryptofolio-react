import { fromJS } from 'immutable';

export function addExchange(state = fromJS({}), action) {
  switch (action.type) {
    case 'ADD_EXCHANGE':
      return Object.assign({}, state, { exchange: action.exchange });
    default:
      return state;
  }
}
