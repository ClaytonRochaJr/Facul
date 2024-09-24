const { addToArray, removeFromArray } = require('./arrayUtils');

test('adiciona 5 ao array [1, 2, 3] deve resultar em [1, 2, 3, 5]', () => {
  expect(addToArray([1, 2, 3], 5)).toEqual([1, 2, 3, 5]);
});

test('remove o 2 do array [1, 2, 3] deve resultar em [1, 3]', () => {
  expect(removeFromArray([1, 2, 3], 2)).toEqual([1, 3]);
});
