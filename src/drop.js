/** 
* Creates a slice of `array` with `n` elements dropped from the beginning.
*
* @category Array
* @param {Array} array The array to query.
* @param {number} [n=1] The number of elements to drop.
* @returns {Array} Returns the slice of `array`.
* @example
*
* _.drop([1, 2, 3]);
* // => [2, 3]
*
* _.drop([1, 2, 3], 2);
* // => [3]
*
* _.drop([1, 2, 3], 5);
* // => []
*
* _.drop([1, 2, 3], 0);
* // => [1, 2, 3]
*/

function drop(array, n = 1) {
    let length = 0;
    let arr = [];
    while (array[length] !== undefined) {
        length++;
    }
    for (let i = n; i < length; i++) {
        let el = array[i];
        arr = [...arr, el];
    }
    return arr;
}

module.exports = drop;