function addToArray(arr, value) {
    arr.push(value);
    return arr;
  }
  
  function removeFromArray(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  module.exports = { addToArray, removeFromArray };
  