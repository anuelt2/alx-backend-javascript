const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return sum of two rounded integers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return sum of an integer and 3.7 rounded to 4', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return sum of 1.2 rounded to 1 and 3.7 rounded to 4', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return sum of 1.5 rounded to 2 and 3.7 rounded to 4', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return sum of 0.5 rounded to 1 and 0.5 rounded to 1', function() {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });

  it('should return sum of 0.1 rounded to 0 and 0.2 rounded to 0', function() {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('should return sum of -1.5 rounded to -1 and -3.7 rounded to -4', function() {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should return sum of 0.5 rounded to 1 and -1.5 rounded to -1', function() {
    assert.strictEqual(calculateNumber(0.5, -1.5), 0);
  });
});
