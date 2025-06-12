const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM, 100 and 20', function() {
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyConsole = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20)

    expect(stubCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubCalculateNumber.restore();
    spyConsole.restore();
  });
});
