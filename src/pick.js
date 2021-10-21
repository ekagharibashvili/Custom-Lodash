/**
  * Creates an object composed of the picked `object` properties.
  *
 
  * @category Object
  * @param {Object} object The source object.
  * @param {...(string|string[])} [paths] The property paths to pick.
  * @returns {Object} Returns the new object.
  * @example
  *
  * var object = { 'a': 1, 'b': '2', 'c': 3 };
  *
  * _.pick(object, ['a', 'c']);
  * // => { 'a': 1, 'c': 3 }
  */


function pick(object, paths) {
    const obj = {};
    for (const prop in object) {
        for (const key of paths) {
            if (key === prop) {
                obj[prop] = object[prop]
            }
        }
    }
    return obj;
}
module.exports = pick;