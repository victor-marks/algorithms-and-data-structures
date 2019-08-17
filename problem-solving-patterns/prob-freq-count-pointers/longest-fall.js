/*
Write a function called longestFall, which accepts an array of integers, and returns the length of 
the longest consecutive decrease of integers.

Examples:

longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
longestFall([]) // 0
*/

function longestFall(arr) {
  if (arr.length === 0) return 0;
  let highCount = 1;
  let currCount = 1;
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[j] < arr[i]) {
      currCount++;
    } else {
      currCount = 1;
    }
    i++;
    j++;
    if (currCount > highCount) highCount = currCount;
  }

  return highCount;
}

module.exports = { longestFall };
