const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe.only('sendPaymentRequestToApi', () => {
  it('utils.calculateNumber should be called accordingly', () => {
    const spy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(100, 20)).to.be.true;
  });
});
