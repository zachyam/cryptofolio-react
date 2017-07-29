export function addCoinInfo(index, coin) {
  const newObj = {};
  newObj[index] = { name: coin };
  newObj[index].formCount = 0;
  return { type: 'ADD_COIN', newObj };
}
