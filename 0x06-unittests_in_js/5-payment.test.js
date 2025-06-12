const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spyConsole;

  beforeEach(function() {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spyConsole.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnce).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnce).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
