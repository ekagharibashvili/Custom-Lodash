const chunk = require('../src/chunk');

test('array ["a", "b", "c", "d"] where size = 2 is splited in [["a", "b"], ["c", "d"]]', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
});
test('array (["a", "b", "c", "d"]) where size = 1 is splited in [["a"], ["b"], ["c"], ["d"]]', () => {
  expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual([["a"], ["b"], ["c"], ["d"]]);
});
test('array ["a", "b", "c", "d"] where size = 3 is splited in [["a", "b", "c"], ["d"]]', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
});