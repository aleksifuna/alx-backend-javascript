const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const utils = require('./utils');

describe('sendPaymentRequestToAPI', function () {
  let spy;

  this.beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  this.afterEach(() => {
    spy.restore();
  });
  it('should log The total is: 120', () => {
    results = sendPaymentRequestToApi(100, 20);
    expect(spy.callCount).to.be.equal(1);
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });
  it('should log The total is: 20', () => {
    results = sendPaymentRequestToApi(10, 10);
    expect(spy.callCount).to.be.equal(1);
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
