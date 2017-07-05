/* eslint-disable */
export function addCoin(state = {}, action) {
  switch (action.type) {
    case 'ADD_COIN':
      let newObj={};
      newObj[action.index] = action.coin;
      return Object.assign({}, state, newObj);
    case 'SAVE_COIN_INFO':
      let test={};
      test[0] = action.values;
      return Object.assign({}, state, test);
    default:
      return state;
  }
}
