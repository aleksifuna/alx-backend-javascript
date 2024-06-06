const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Calculate number', function() {
    it('should return sum', function () {
        const sum1 = calculateNumber(1, 3);
        const sum2 = calculateNumber(1, 3.7);
        const sum3 = calculateNumber(1.2, 3.7);
        assert(sum1 === 4);
        assert(sum2 === 5);
        assert(sum3 === 5);
    });
});