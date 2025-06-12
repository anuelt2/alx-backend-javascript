const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved Promise with an object when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.property('data');
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch(done);
  });
});
