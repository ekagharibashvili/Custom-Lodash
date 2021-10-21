const drop = require('../src/drop');

test('array ([1, 2, 3]) sliced from n is  equal [2, 3]', () => {
    expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});

test('array ([1, 2, 3], 2) sliced from n is  equal [3]', () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});

test('array ([1, 2, 3], 5) sliced from n is  equal []', () => {
    expect(drop([1, 2, 3], 5)).toStrictEqual([]);
});

test('array ([1, 2, 3], 0) sliced from n is  equal [1, 2, 3]', () => {
    expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
});