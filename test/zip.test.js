const zip = require('../src/zip');

test('arrays grouped elements', ()=> {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
});

test('arrays grouped elements', ()=> {
    expect(zip(['a', 'b'], [1, 2], [true, false], ['', '1'])).toStrictEqual([['a', 1, true, ''], ['b', 2, false, '1']]);
});

test('arrays grouped elements', ()=> {
    expect(zip(['a', 'b'], [1, 2], [true, false], [undefined, NaN])).toStrictEqual([['a', 1, true, undefined], ['b', 2, false, NaN]]);
});