/*
Write a function that is passed a string which can contain any text, including different kinds of brackets: {} [] ().

It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

Examples of balanced strings:

hello (no brackets)
(hi) [there]
(hi [there])
(((hi)))
Imbalanced:

(hello (bracket left open at end)
(nope] (wrong type closed)
((ok) [nope)] (closed out of order)
 */

function balancedBrackets(str) {
  if (str.length <= 1 || str.length % 2 !== 0) return false;

  let matchingOpeningBracket;
  let char;
  let stack = [];

  let openingBrackets = ['[', '{', '('];
  let closingBrackets = [']', '}', ')'];

  for (let i = 0; i < str.length; i++) {
    char = str[i];

    if (closingBrackets.indexOf(char) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// balancedBrackets('([)]'); // false
// balancedBrackets('()'); // true
// balancedBrackets('{}[]()'); // true
// balancedBrackets('{[}]'); // false
// balancedBrackets('{[}]'); // false
// balancedBrackets(
//   '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'
// ); // true
balancedBrackets('{}[]()'); // true
