/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
*/

function recursiveRange(num) {
  let sum = 0;

  while (num >= 0) {
    if (num === 0) {
      return 0;
    } else {
      sum += num;
    }
    return (sum += recursiveRange(num - 1));
  }
}

recursiveRange(6); // 21
recursiveRange(10); // 55
