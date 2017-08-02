/* eslint-disable */
export function coinInfo(state = {}, action) {
  switch (action.type) {
    case 'ADD_COIN':
      const { newObj } = action;
      return Object.assign({}, state, newObj);
    case 'SAVE_COIN_INFO':
      const { index, values } = action;
      const coinInfo = state[index];
      const coinInfoForm = state[index]['form'] || [];
      const coinInfoCount = coinInfo['formCount'];
      return {
        ...state,
        [index]: {
          ...coinInfo,
          'form': [ ...coinInfoForm.slice(0, coinInfoCount),
                    values,
                    ...coinInfoForm.slice(coinInfoCount)
                  ],
          'formCount': state[index]['formCount'] + 1
        },
      }
    case 'SAVE_EDITED_COIN_INFO':
      const { indexCoin, txn, editedValues } = action;
      const editedCoinInfo = state[indexCoin];
      const editedCoinInfoForm = state[indexCoin]['form'] || [];
      const editedCoinInfoCount = editedCoinInfo['formCount'];
      return {
        ...state,
        [indexCoin]: {
          ...editedCoinInfo,
          'form': editedCoinInfoForm.map((item, index) => {
                      if (index !== txn) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                      }
                      // Otherwise, this is the one we want - return an updated value
                      console.log('test')
                      return {
                        ...item,
                        ...editedValues
                      };
                    }),
          'formCount': editedCoinInfoCount
        },
      }
    case 'DELETE_COIN_INFO':
      const { indexCoinDelete, txnDelete } = action;
      const deletedCoinInfo = state[indexCoinDelete];
      const deletedCoinInfoForm = state[indexCoinDelete]['form'];
      const deletedCoinInfoCount = deletedCoinInfo['formCount'];
      return {
        ...state,
        [indexCoinDelete]: {
          ...deletedCoinInfo,
            'form': [
              ...deletedCoinInfoForm.slice(0, txnDelete),
              ...deletedCoinInfoForm.slice(txnDelete + 1)
            ],
          'formCount': deletedCoinInfoCount - 1
        },
      }
    default:
      return state;
  }
}
