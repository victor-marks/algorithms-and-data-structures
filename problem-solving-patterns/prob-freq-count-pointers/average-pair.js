/*
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the 
target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
*/

function averagePair(arr, target) {
  if (arr.length === 0) return false;
  let average;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    average = (arr[i] + arr[j]) / 2;
    if (average === target) return true;
    else if (average < target) i++;
    else j--;
  }

  return false;
}

module.exports = { averagePair };
