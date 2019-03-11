/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  let newArr = capitalizeWords(arr.slice(0, -1));
  newArr.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return newArr;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
