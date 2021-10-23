const filter = require('../src/filter');


test('Iterates over elements of Array, returning an array of all elements predicate returns truthy',
  () => {
    expect(filter([1, 2, 3, 4, 5, 6], (a) => a % 2 === 0))
      .toStrictEqual([2, 4, 6]);
  });
