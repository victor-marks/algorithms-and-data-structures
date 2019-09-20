const { strStr } = require('./strStr');

describe('#strStr', function() {
  it('finds the first occurrence of needle in haystack', function() {
    expect(strStr('hello', 'll')).toBe(2);
    expect(strStr('aaaaa', 'bba')).toBe(-1);
    expect(strStr('aaaaa', '')).toBe(0);
    expect(strStr('a', 'a')).toBe(0);
    expect(strStr('aaa', 'a')).toBe(0);
  });
});
