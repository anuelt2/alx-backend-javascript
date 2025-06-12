const chai = require('chai');
const expect = chai.expect;
const request = require('request');

const url = 'http://localhost:7865';

describe('Payment API integration', function() {
  describe('index page', function() {
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

  describe('cart page', function() {
    it('should return status code 200 when :id is a number', function(done) {
      request(`${url}/cart/3`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return status code 404 when :id is not a number', function(done) {
      request(`${url}/cart/string`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('should return the message "Payment methods for cart 3"', function(done) {
      request(`${url}/cart/3`, (error, response) => {
        expect(response.body).to.equal('Payment methods for cart 3');
        done();
      });
    });
  });
});
