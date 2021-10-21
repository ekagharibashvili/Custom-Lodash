const includes = require('../src/includes');

test('([1, 2, 3], 1) returns true', () => {
    expect(includes([1, 2, 3], 1)).toStrictEqual(true);
});

test('([1, 2, 3], 1, 2) returns false', () => {
    expect(includes([1, 2, 3], 1, 2)).toStrictEqual(false);
});

test("({ 'a': 1, 'b': 2 }, 1) returns true", () => {
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toStrictEqual(true);
});

test("('abcd', 'bc') returns true", () => {
    expect(includes('abcd', 'bc')).toStrictEqual(true);
});


