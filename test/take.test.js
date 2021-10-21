const take = require('../src/take');

test('array ([1, 2, 3]) sliced before n is  equal [1]', () => {
    expect(take([1, 2, 3])).toStrictEqual([1]);
});

test('array ([1, 2, 3], 2) sliced before n is  equal [1, 2]', () => {
    expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
});

test('array ([1, 2, 3], 5) sliced before n is  equal [1, 2, 3]', () => {
    expect(take([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
});

test('array ([1, 2, 3], 0) sliced before n is  equal []', () => {
    expect(take([1, 2, 3], 0)).toStrictEqual([]);
});