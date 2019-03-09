// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// frequency counter
// Time O(n)

function sameFrequency(num1, num2) {
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');

  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};

  for (let i of arr1) {
    if (obj1[i]) {
      obj1[i]++;
    } else {
      obj1[i] = 1;
    }
  }

  for (let i in obj1) {
    if (arr2.indexOf(i) === -1) {
      return false;
    }
  }

  return true;
}

/*
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) // true
sameFrequency(22,222) // false
*/
