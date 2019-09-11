const { romanToInt } = require('./roman-to-integer');

describe('#romanToInt', function() {
  it('converts a roman numeral to an integer', function() {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
