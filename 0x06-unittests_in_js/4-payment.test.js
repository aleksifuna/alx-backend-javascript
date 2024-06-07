const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('utils.calculateNumber should be called accordingly', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(utils, 'calculateNumber').returns(10);
    const total = sendPaymentRequestToApi(100, 20);
    expect(stub.callCount).to.be.equal(1);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
