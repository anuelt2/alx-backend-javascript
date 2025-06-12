const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Payment API integration', function() {
  describe('index page', function() {
    const url = 'http://localhost:7865';

    it('should return status code 200', function(done) {
      request(url, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the message "Welcome to the payment system"', function(done) {
      request(url, (error, response) => {
        expect(response.body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('should have Content-Type header set to text/html', function(done) {
      request(url, (error, response) => {
        expect(response.headers['content-type']).to.include('text/html');
        done();
      });
    });
  });
});
