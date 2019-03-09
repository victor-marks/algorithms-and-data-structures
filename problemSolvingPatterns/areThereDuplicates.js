/*
Implement a function called, areThereDuplicates which accepts a variable number of arguements, and checks whether there are any duplicates among arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n*log(n))
Space - O(1)

Frequency Counter
*/

function areThereDuplicates() {
  let obj = {};
  for (let val in arguments) {
    obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
}

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
