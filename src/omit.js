/**
  * The opposite of `_.pick`; this method creates an object composed of the
  * own and inherited enumerable property paths of `object` that are not omitted.
  *
  * **Note:** This method is considerably slower than `_.pick`.
  *
 
  * @category Object
  * @param {Object} object The source object.
  * @param {...(string|string[])} [paths] The property paths to omit.
  * @returns {Object} Returns the new object.
  * @example
  *
  * var object = { 'a': 1, 'b': '2', 'c': 3 };
  *
  * _.omit(object, ['a', 'c']);
  * // => { 'b': '2' }
  */
function omit(object, paths) {
    const obj = object;
    for (const prop in object) {
        for (const key in paths) {
            if (paths[key] === prop) {
                obj[prop] = object[prop];
                delete obj[prop];
            }
        }
    }
    return obj;
}

module.exports = omit;