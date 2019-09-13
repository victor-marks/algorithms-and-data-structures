/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let pointer = 0;
  let longestPrefix = '';
  let currentChar = '';
  let stillSearching = true;

  while (stillSearching) {
    currentChar = strs[0][pointer];

    if (!currentChar) break;

    for (let i = 0; i < strs.length; i++) {
      if (strs[i][pointer] !== currentChar) stillSearching = false;
    }

    if (stillSearching) longestPrefix += currentChar;
    pointer++;
  }

  return longestPrefix;
}

module.exports = { longestCommonPrefix };
