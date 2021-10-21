const omit = require('../src/omit');

test('Creates an object composed of the picked `object` properties', () => {
    let object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
});