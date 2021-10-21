const pickBy = require('../src/pickBy');

test('pickBy should create an object composed of the object properties predicate returns truthy for', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const func = (val) => val > 2;
  expect(pickBy(object, func)).toEqual({ c: 3, d: 4, e: 5 });
});