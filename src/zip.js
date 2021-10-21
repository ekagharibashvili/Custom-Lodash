/**
   * Creates an array of grouped elements, the first of which contains the
   * first elements of the given arrays, the second of which contains the
   * second elements of the given arrays, and so on.
   * @category Array
   * @param {...Array} [arrays] The arrays to process.
   * @returns {Array} Returns the new array of grouped elements.
   * @example
   *
   * _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   */

function zip(...arrays) {
    let newArr = [];
    let firstArr = [];
    let secondArr = [];
    let length = 0;
    while (arrays[length] !== undefined) {
        length++;
    } 
    for(let i = 0; i < length; i++) {
        firstArr = [...firstArr, arrays[i][0]];
    }
    for(let i = 0; i < length; i++) {
        secondArr = [...secondArr, arrays[i][1]];
    }
    return [...newArr, firstArr, secondArr];
}

module.exports = zip;