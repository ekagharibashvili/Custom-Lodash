/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
    let length = 0;
    while (array[length] !== undefined) {
        length++;
    }
    let join = (array, separator = '') => {
        let result = '';
        for (let i = 0; i < length; i++) {
            if (result) {
                result += separator;
            }
            else {
                result += '';
            }
            result += array[i];
        }
        return result;
    };
    let str = join(array);
    let arrayChunks = [];
    for (let i = 0; i < length; i += size) {
        let arrayChunk = str.substring(i, i + size).split('');
        arrayChunks = [...arrayChunks, arrayChunk]
    }
    return arrayChunks;
} 
module.exports = chunk;