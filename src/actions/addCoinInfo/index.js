/* eslint-disable */

export function addCoinInfo(index, coin, symbol) {
  const newObj = {};
  newObj[index] = { name: coin, symbol: symbol };
  newObj[index].formCount = 0;
  return { type: 'ADD_COIN', newObj };
}
