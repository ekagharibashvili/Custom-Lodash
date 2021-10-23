const dropWhile = require('../src/dropWhile');
    test('should drop elements until predicate returns falsey', () => {
        var users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false },
            { 'user': 'pebbles', 'active': true }
        ];
        expect(dropWhile(users, function (o) { return !o.active; })).toEqual([{ active: true, user: "pebbles" }]);
        expect(dropWhile(users, { 'user': 'barney', 'active': false })).toEqual([{ active: false, user: "fred" }, { active: true, user: "pebbles" }]);
        expect(dropWhile(users, 'active')).toEqual([
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false },
            { 'user': 'pebbles', 'active': true }
        ]);
        expect(dropWhile(users, ['active', false])).toEqual([{ active: true, user: "pebbles" }]);

    });