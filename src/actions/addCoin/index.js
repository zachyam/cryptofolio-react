export function addCoin(index, coin) {
  let newObj = {};
  newObj[index] = { 'name' : coin };
  return { type: 'ADD_COIN', newObj };
}
