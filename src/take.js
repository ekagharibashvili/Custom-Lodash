/**
* @category Array
* @param {Array} array The array to query.
* @param {number} [n=1] The number of elements to take.
* @returns {Array} Returns the slice of `array`.
* @example
*
* _.take([1, 2, 3]);
* // => [1]
*
* _.take([1, 2, 3], 2);
* // => [1, 2]
*
* _.take([1, 2, 3], 5);
* // => [1, 2, 3]
*
* _.take([1, 2, 3], 0);
* // => []
*/
function take(array, n = 1) {
    let length = 0;
    let arr = [];
    while (array[length] !== undefined) {
        length++;
    }
    if (n > length) {
        return array;
    }
    else {
        for (let i = 0; i < n; i++) {
            let el = array[i];
            arr = [...arr, el];
        }
        return arr;
    }
}

module.exports = take;

