/*
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; eg, factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial (0!) is always 1.
*/

function factorial(num) {
  while (num >= 0) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
}

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040
