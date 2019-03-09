/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
frequency counter
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    obj1[letter] ? obj1[letter]++ : (obj1[letter] = 1);
  }

  for (let j = 0; j < str2.length; j++) {
    let letter = str2[j];
    if (!obj1[letter]) {
      return false;
    } else {
      obj1[letter]--;
    }
  }

  return true;
}

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'peywrt') // true
// validAnagram('texttwisttime', 'timetwisttext'); // true
