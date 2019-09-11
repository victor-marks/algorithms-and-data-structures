/*
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(nums, target) {
  let numObject = {};
  for (let i = 0; i < nums.length; i++) {
    let thisNum = nums[i];
    numObject[thisNum] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]];
    }
  }
}

module.exports = { twoSum };
