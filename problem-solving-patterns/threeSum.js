/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

Example: Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

// solved with 2 pointers for every nums[index] (aka anchor pointer)
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];

    if (a > 0) return result;
    if (a === nums[indexA - 1]) continue;

    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];

      if (a + b + c === 0) {
        result.push([a, b, c]);
      }

      if (a + b + c >= 0) {
        while (nums[indexC - 1] === c) {
          indexC--;
        }
        indexC--;
      }

      if (a + b + c <= 0) {
        while (nums[indexB + 1] === b) {
          indexB++;
        }
        indexB++;
      }
    }
  }
  return result;
}
