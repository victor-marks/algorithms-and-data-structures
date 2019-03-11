/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  }

  let newArr = capitalizeFirst(arr.slice(0, -1));
  let string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].slice(1);
  newArr.push(string);
  return newArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
