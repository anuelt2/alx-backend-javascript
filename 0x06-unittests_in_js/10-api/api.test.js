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

  describe('login page', function() {
    const options = {
      url: `${url}/login`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName: 'Betty'}),
    };

    it('should return status code 200 and welcome message with username', function(done) {
      request(options, (error, response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal('Welcome Betty');
        done();
      })
    });

    it('should return message "Welcome undefined" with no username', function(done) {
      request.post(`${url}/login`, { json: {} }, (error, response) => {
        expect(response.body).to.equal('Welcome undefined');
        done();
      });
    });
  });

  describe('available_payments endpoint', function() {
    it('should return status code 200', function(done) {
      request(`${url}/available_payments`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return an object', function(done) {
      request({ url: `${url}/available_payments`, json: true }, (error, response) => {
        expect(response.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });
});
