const merge = require('../src/merge')

test(`merge function recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.`, () => {
    expect(merge({a: 3, b: 6},{c: 7, d: 1})).toStrictEqual({ a: 3, b: 6, c: 7, d: 1 });
    expect(merge({a: 3, f: 8},{b: 3, a: 5, c: 7})).toStrictEqual({ a: 5, f: 8, b: 3, c: 7 });
    expect(merge({a: 3, a: 6},{c: 2, d: 4, a: 1})).toStrictEqual({ a: 1, c: 2, d: 4 });
  });