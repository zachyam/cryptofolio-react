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
      const coinInfoCount = coinInfo['formCount'];
      return {
        ...state,
        [index]: {
          ...coinInfo,
          'form': { ...coinInfoForm,
                    [coinInfoCount]: {
                      values
                    }
                  },
          'formCount': state[index]['formCount'] + 1
        },
      }
    case 'SAVE_EDITED_COIN_INFO':
      const { indexCoin, txn, editedValues } = action;
      const editedCoinInfo = state[indexCoin];
      const editedCoinInfoForm = state[indexCoin]['form'];
      return {
        ...state,
        [indexCoin]: {
          ...editedCoinInfo,
          'form': { ...editedCoinInfoForm,
                    [txn]: {
                      'values': editedValues
                    }
                  },
          'formCount': state[indexCoin]['formCount']
        },
      }
    default:
      return state;
  }
}
