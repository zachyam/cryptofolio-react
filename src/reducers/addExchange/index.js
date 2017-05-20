import { fromJS } from 'immutable';

export function addExchange(state = fromJS({}), action) {
  switch (action.type) {
    case 'ADD_EXCHANGE':
      return state.set(action.exchange, action.exchange);
    default:
      return state;
  }
}
