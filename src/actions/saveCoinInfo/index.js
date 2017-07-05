export function saveCoinInfo(values) {
  return (saveCoinInfoDispatch) =>
    saveCoinInfoDispatch({ type: 'SAVE_COIN_INFO', values });
}
