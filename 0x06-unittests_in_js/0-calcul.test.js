const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculate number', () => {
  it('should return sum', () => {
    const sum1 = calculateNumber(1, 3);
    const sum2 = calculateNumber(1, 3.7);
    const sum3 = calculateNumber(1.2, 3.7);
    assert.equal(sum1, 4);
    assert.strictEqual(sum2, 5);
    assert.strictEqual(sum3, 5);
  });
});
