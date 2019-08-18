/*
Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where 
the sum of the items to the left equal to the sum of the items to the right. If there are more than one 
valid pivot index, return the smallest value.

Examples:

pivotIndex([1,2,1,6,3,1]) // 3
pivotIndex([5,2,7]) // -1  no valid pivot index
pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2
Constraints

Time Complexity: O(N)
*/

function pivotIndex(arr) {
  let i = 0;
  let j = 1;
  let k = 2;
  let leftSum = arr[i];
  let targetSum = arr[j];
  let rightSum = 0;
  for (let l = 2; l < arr.length; l++) {
    rightSum += arr[l];
  }

  while (k < arr.length) {
    if (leftSum === rightSum) return j;
    else {
      i++;
      j++;
      k++;
      leftSum += arr[i];
      rightSum -= arr[j];
    }
  }

  return -1;
}

module.exports = { pivotIndex };
