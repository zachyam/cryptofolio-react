export function addCoin(index, coin) {
  return (addCoinDispatch) =>
    addCoinDispatch({ type: 'ADD_COIN', index, coin });
}
