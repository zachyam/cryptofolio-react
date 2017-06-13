/* eslint-disable */
export function addCoin(state = {}, action) {
  switch (action.type) {
    case 'ADD_COIN':
      let newObj={};
      newObj[action.index] = action.coin;
      return Object.assign({}, state, newObj);
    default:
      return state;
  }
}
