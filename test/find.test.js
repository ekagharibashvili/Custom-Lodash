const find = require('../src/find');

test('find should return value if this value exists in the array', () => {
  const arr = [1, 2, 3, 4, 5];
  const fn = (num) => num > 3;
  expect(find(arr, fn)).toEqual(4);
});

test('find should return undefined if this value doesnt exist in the array', () => {
  const arr = [1, 2, 3, 4, 5];
  const fn = (num) => num > 5;
  expect(find(arr, fn)).toBeUndefined();
});