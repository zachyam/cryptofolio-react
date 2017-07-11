/* eslint-disable */
export function addCoin(state = {}, action) {
  switch (action.type) {
    case 'ADD_COIN':
      const { newObj } = action;
      return Object.assign({}, state, newObj);
    case 'SAVE_COIN_INFO':
      const { index, values } = action;
      const coinInfo = state[index];
      const coinInfoForm = state[index]['form'];
      const CoinInfoCount = coinInfo['formCount'];
      console.log('lol', state[index]['formCount']);
      return {
        ...state,
        [index]: {
          ...coinInfo,
          'form': { ...coinInfoForm,
                    [CoinInfoCount]: {
                      values
                    }
                  },
          'formCount': state[index]['formCount'] + 1
        },
      }
    default:
      return state;
  }
}
