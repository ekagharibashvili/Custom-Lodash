const pick = require('../src/pick');

test('Creates an object composed of the picked `object` properties', () => {
    let object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
});