const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('test for the calculator using chai assert lib', () => {
  describe('test SUM function', () => {
    it('should round of arguments and return sum', () => {
      const sum1 = calculateNumber('SUM', 1.4, 4.5);
      const sum2 = calculateNumber('SUM', 2, 3.1);
      expect(sum1).to.eql(6);
      expect(sum2).to.eql(5);
    });
  });
  describe('test SUBTRACT function', () => {
    it('should round of arguments and return the difference', () => {
      const diff1 = calculateNumber('SUBTRACT', 7.3, 0.3);
      const diff2 = calculateNumber('SUBTRACT', 5.0, 9);
      expect(diff1).to.eql(7);
      expect(diff2).to.eql(-4);
    });
  });
  describe('test DIVIDE function', () => {
    it('should round of arguments and return the difference', () => {
      const quo1 = calculateNumber('DIVIDE', -10, 2);
      const quo2 = calculateNumber('DIVIDE', 5.0, 0);
      expect(quo1).to.eql(-5);
      expect(quo2).to.eql('Error');
    });
  });
});
