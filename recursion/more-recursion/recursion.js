/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, currLongest = 0) {
  if (idx === words.length) return currLongest;
  currLongest = Math.max(words[idx].length, currLongest);
  return longest(words, idx + 1, currLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, output = '') {
  if (idx > str.length) return output;
  output += str[idx];
  return everyOther(str, (idx += 2), output);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let left = idx;
  let right = str.length - idx - 1;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
