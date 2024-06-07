const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test with whole numbers', () => {
    const sum1 = calculateNumber(1, 3);
    assert.strictEqual(sum1, 4);
  });
  it('test with one  float and whole number', () => {
    const sum2 = calculateNumber(1, 3.7);
    assert.strictEqual(sum2, 5);
  });
  it('test with both argments float', () => {
    const sum3 = calculateNumber(1.2, 3.7);
    assert.strictEqual(sum3, 5);
  });
});
