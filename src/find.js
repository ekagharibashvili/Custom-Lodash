function myLength(array) {
    let length = 0;
    while (array[length] !== undefined) {
      length += 1;
    }
    return length;
  }

const find = (array, callback) => {
    const length = myLength(array);
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      if (callback(value, index, array)) {
        return array[index];
      }
    }
    return undefined;
  };
  
  module.exports = find;