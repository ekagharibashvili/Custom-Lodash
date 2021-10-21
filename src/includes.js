/**
  * @category Collection
  * @param {Array|Object|string} collection The collection to inspect.
  * @param {*} value The value to search for.
  * @param {number} [fromIndex=0] The index to search from.
  * @returns {boolean} Returns `true` if `value` is found, else `false`.
  * @example
  *
  * _.includes([1, 2, 3], 1);
  * // => true
  *
  * _.includes([1, 2, 3], 1, 2);
  * // => false
  *
  * _.includes({ 'a': 1, 'b': 2 }, 1);
  * // => true
  *
  * _.includes('abcd', 'bc');
  * // => true
  */
function includes(collection, value, fromIndex = 0) {
    if (typeof collection === 'string') {
        return collection.slice(fromIndex).includes(value);
    }
    else if(Array.isArray(collection)) {
      let length = 0;
        while (collection[length] !== undefined) {
            length++;
        } 
        for(let i = fromIndex; i<length; i++) {
            return collection[i] === value;
        }
    }
    else {
        let values = Object.values(collection);
        let length = 0;
        while (values[length] !== undefined) {
            length++;
        }
            for (let i = fromIndex; i < length; i++) {
                return values[i] === value;
        }
    } 
}

module.exports = includes;