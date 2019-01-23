/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  let product = 1;

  if (arr.length === 0) {
    return 1;
  } else {
    product *= arr[0];
  }

  return (product *= productOfArray(arr.slice(1)));
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60
