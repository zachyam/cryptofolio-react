export function saveEditedCoinInfo(indexCoin, txn, editedValues) {
  return { type: 'SAVE_EDITED_COIN_INFO', indexCoin, txn, editedValues };
}
