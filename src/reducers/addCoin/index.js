import { fromJS } from 'immutable';

export function addCoin(state = fromJS({}), action) {
  switch (action.type) {
    case 'ADD_COIN':
      return state.set(action.index, action.coin);
    default:
      return state;
  }
}
