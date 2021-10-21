/**
  * Creates an array with all falsey values removed. The values `false`, `null`,
  * `0`, `""`, `undefined`, and `NaN` are falsey.
  *
  * @category Array
  * @param {Array} array The array to compact.
  * @returns {Array} Returns the new array of filtered values.
  * @example
  *
  * _.compact([0, 1, false, 2, '', 3]);
  * // => [1, 2, 3]
  */

function compact(array) {
    let length = 0;
    let arr = [];
    let falsy;
    while (array[length] !== undefined) {
        length++;
    }
    for (let i = 0; i < length; i++) {
        falsy = Boolean(array[i]);
        if (falsy === true) {
            arr = [...arr, array[i]];
        }
    }
    return arr;
}

module.exports = compact;