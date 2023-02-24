const request = require('request');
const expect = require('chai').expect;

describe('For index page of local server', function() {
	it('should test for correct status code', function() {
		request.get('http://localhost:7865', (err, res, body) =>{
		expect(res.statusCode).to.equal(200);
		});
	});
	it('should test for correct body', function() {
		request.get('http://localhost:7865', (err, res, body) =>{
		expect(body).to.equal('Welcome to the payment system');
		});
	});
});
