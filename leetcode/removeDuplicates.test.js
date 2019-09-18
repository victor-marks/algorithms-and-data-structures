const { removeDuplicates } = require('./removeDuplicates');

describe('#removesDuplicates', function() {
  it('returns number of unique numbers', function() {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    expect(removeDuplicates([0])).toBe(1);
    expect(removeDuplicates([])).toBe(0);
  });
});
