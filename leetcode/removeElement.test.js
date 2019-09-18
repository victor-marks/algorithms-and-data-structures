const { removeElement } = require('./removeElement');

describe('#removeElement', function() {
  it('removes all instances of an element from an array and returns its length', function() {
    expect(removeElement([], 3)).toBe(0);
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
    expect(removeElement([3, 2, 2, 3], 5)).toBe(4);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
    expect(removeElement([0, -1, 2, 2, -3, 0, 4, 2], 4)).toBe(7);
  });
});
