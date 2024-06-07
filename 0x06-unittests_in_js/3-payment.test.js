const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('utils.calculateNumber should be called accordingly', () => {
    const spy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.callCount).to.be.equal(1);
    expect(spy.calledWith(100, 20)).to.be.true;
    spy.restore();
  });
});
