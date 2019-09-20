const { searchInsert } = require('./searchInsert');

describe('#searchInsert', function() {
  it('search sorted array and return index of target value if found, if not then index of where it should be.', function() {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 4, 4)).toBe(2);
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
});
