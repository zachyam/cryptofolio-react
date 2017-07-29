export function deleteCoinInfo(indexCoinDelete, txnDelete) {
  return { type: 'DELETE_COIN_INFO', indexCoinDelete, txnDelete };
}
