const compact = require('../src/compact');

test("([0, 1, false, 2, '', 3]) equal to [1, 2, 3]", () => {
    expect(compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
});

test("([0, null, undefined, NaN, 2, '', 5]) equal to [2, 5]", () => {
    expect(compact([0, null, NaN, 2, '', 5])).toStrictEqual([2, 5]);
});