const { isValid } = require('./valid-parentheses');

describe('#isValid', function() {
  it('finds if a given string of parens have the correct opening and closing parens', function() {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
  });
});
