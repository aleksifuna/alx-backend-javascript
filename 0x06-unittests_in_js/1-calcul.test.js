const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test for the calculator', () => {
  describe('test SUM function', () => {
    it('should round of arguments and return sum', () => {
      const sum1 = calculateNumber('SUM', 1.4, 4.5);
      const sum2 = calculateNumber('SUM', 2, 3.1);
      assert.strictEqual(sum1, 6);
      assert.strictEqual(sum2, 5);
    });
  });
  describe('test SUBTRACT function', () => {
    it('should round of arguments and return the difference', () => {
      const diff1 = calculateNumber('SUBTRACT', 7.3, 0.3);
      const diff2 = calculateNumber('SUBTRACT', 5.0, 9);
      assert.strictEqual(diff1, 7);
      assert.strictEqual(diff2, -4);
    });
  });
  describe('test DIVIDE function', () => {
    it('should round of arguments and return the difference', () => {
      const quo1 = calculateNumber('DIVIDE', -10, 2);
      const quo2 = calculateNumber('DIVIDE', 5.0, 0);
      assert.strictEqual(quo1, -5);
      assert.strictEqual(quo2, 'Error');
    });
  });
});
