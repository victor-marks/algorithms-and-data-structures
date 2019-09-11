const { twoSum } = require('./two-sum');

describe('#twoSum', function() {
  it('returns an array of two indicies whose values that sum to target', function() {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2]);
    expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
    expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3]);
    expect(twoSum([2, 7, 11, 15], 22)).toEqual([1, 3]);
  });
});
