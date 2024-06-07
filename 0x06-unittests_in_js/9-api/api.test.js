const request = require('request');
const { expect } = require('chai');

describe('aPI intergration test', () => {
  it('/ GET method', () => new Promise((done) => {
    const URL = 'http://localhost:7865/';
    request.get(URL, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
  it('gET /cart/:id with int', () => new Promise((done) => {
    const URL = 'http://localhost:7865/cart/1';
    request.get(URL, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  }));
  it('gET /cart/:id with non int', () => new Promise((done) => {
    const URL = 'http://localhost:7865/cart/b';
    request.get(URL, (err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});
