const { longestCommonPrefix } = require('./longest-common-prefix');

describe('#longestCommonPrefix', function() {
  it('finds the longest common prefix among given strings', function() {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
