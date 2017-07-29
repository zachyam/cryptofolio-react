/* eslint-disable */
export function coinInfo(state = {}, action) {
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
    case 'DELETE_COIN_INFO':
      const { indexCoinDelete, txnDelete } = action;
      console.log(Object.keys(state[indexCoinDelete]['form']));
      var filteredForm = Object.keys(state[indexCoinDelete]['form']).filter(function(txn) {
        return txn !== txnDelete;
      })
      console.log(filteredForm);
      // return Object.assign(...state, (Object.keys(state[indexCoinDelete]['form'])).filter(function(txn) {
      //   console.log(txn);
      //   return txn !== txnDelete;
      // }))
    default:
      return state;
  }
}
