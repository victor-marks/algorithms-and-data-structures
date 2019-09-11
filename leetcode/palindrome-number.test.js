const { isPalindrome } = require('./palindrome-number');

describe('#isPalindrome', function() {
  it('determines whether an integer is a palindrome', function() {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(12121)).toBe(true);
  });
});
