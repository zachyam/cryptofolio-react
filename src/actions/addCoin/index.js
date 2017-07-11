export function addCoin(index, coin) {
  let newObj = {};
  newObj[index] = { 'name' : coin };
  newObj[index]['formCount'] = 0;
  return { type: 'ADD_COIN', newObj };
}
