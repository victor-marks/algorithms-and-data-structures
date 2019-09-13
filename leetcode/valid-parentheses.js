/*
https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

function isValid(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  let arr = s.split('');
  let i = 1;
  let parens = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  let stack = [];
  stack.push(arr[0]);

  while (i < arr.length) {
    if (stack[stack.length - 1] === '(' && arr[i] === ')') stack.pop();
    else if (stack[stack.length - 1] === '[' && arr[i] === ']') stack.pop();
    else if (stack[stack.length - 1] === '{' && arr[i] === '}') stack.pop();
    else stack.push(arr[i]);
    i++;
  }

  return stack.length === 0;
}

module.exports = { isValid };
