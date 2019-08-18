/*
Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of 
keys and the second one consists of values. Your function should return an object created from the keys and values. 
If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore 
the rest of values.

Examples:

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}
*/

function twoArrayObject(arr1, arr2) {
  let obj = {};
  let key;

  for (let i = 0; i < arr1.length; i++) {
    key = arr1[i];
    console.log('key: ', key);
    obj[key] = arr2[i];
  }

  for (let j in obj) {
    if (obj[j] === undefined) obj[j] = null;
  }

  return obj;
}

module.exports = { twoArrayObject };
