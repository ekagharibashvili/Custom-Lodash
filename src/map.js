  /**
 * Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 * **Note:** This method mutates `object`.
 *
 * @category array
 * collection (Array|Object): The collection to iterate over.
 * [iteratee=_.identity] (Function): The function invoked per iteration.
 * @returns array
 * @example
 * function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
 * */