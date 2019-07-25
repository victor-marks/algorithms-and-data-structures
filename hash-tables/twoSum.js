// find all the pairs of two integers in an unsorted array that sum up to a given S
function twoSum(arr, S) {
  let sums = [];
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let sumMinusElement = S - arr[i];

    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }
    hashTable[arr[i].toString()] = arr[i];
  }
  return sums;
}

twoSum([3, 5, 2, -4, 8, 11]);
