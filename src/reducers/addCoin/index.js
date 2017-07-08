/* eslint-disable */
export function addCoin(state = {}, action) {
  switch (action.type) {
    case 'ADD_COIN':
      const { newObj } = action;
      return Object.assign({}, state, newObj);
    case 'SAVE_COIN_INFO':
      const { index, values } = action;
      const coinInfo = state[index];
      return {
        ...state,
        [index]: {
          ...coinInfo,
          'form': values
        }
      }
    default:
      return state;
  }
}
