const toPairs = require('../src/toPairs');
test('return entries', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }
    expect(toPairs(new Foo)).toStrictEqual( [['a', 1], ['b', 2]]);
});

test('return entries', () => {
    function Foo() {
        this.c = 3;
        this.d = 5;
    }
    expect(toPairs(new Foo)).toStrictEqual( [['c', 3], ['d', 5]]);
});