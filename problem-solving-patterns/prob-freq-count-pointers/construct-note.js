/*
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(message, letters) {
  let messageObj = {};
  let lettersObj = {};

  for (let i of message) {
    messageObj[i] = (messageObj[i] || 0) + 1;
  }

  for (let j of letters) {
    lettersObj[j] = (lettersObj[j] || 0) + 1;
  }

  for (let k in lettersObj) {
    if (messageObj.hasOwnProperty(k)) {
      while (messageObj[k] > 0 && lettersObj[k] > 0) {
        messageObj[k]--;
        lettersObj[k]--;
      }
    }
  }

  for (let l in messageObj) {
    if (messageObj[l] === 0) {
      delete messageObj[l];
    }
  }

  return Object.keys(messageObj).length === 0;
}

module.exports = { constructNote };
