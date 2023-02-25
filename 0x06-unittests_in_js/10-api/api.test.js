const request = require('request');
const expect = require('chai').expect;


describe('For index page of local server', function() {
	it ('should test for GET /login', function(done) {
		const options = {
			url: 'http://localhost:7865/login',
			method: 'POST',
			headers: {
				'User-Agent': 'request',
			  },
			json: true,
			body: {userName: 'Betty'},
		};
		request.post(options, (err, res, body) => {
			expect(res.statusCode).to.equal(200)
			expect(body).to.equal('Welcome Betty')
			done();
		});
	});

	it ('should test for GET /available_payments', function(done) {
		request.get('http://localhost:7865/available_payments', {json: true}, (req, res, body) => {
			expect(res.statusCode).to.equal(200);
			expect(body).to.deep.equal({
				payment_methods: {
				  credit_cards: true,
				  paypal: false
				}
			  })
			done();
		})
	})

	it ('should test for GET /cart/:id', function(done) {
		request.get('http://localhost:7865/cart/1', (err, res, body) => {
			expect(res.statusCode).to.equal(200)
			expect(body).to.equal('Payment methods for cart 1')
			done();
		});
	});

	it ('should test for when id is NaN e.g /cart/rest', function(done) {
		request.get('http://localhost:7865/cart/rest', (err, res, body) => {
			expect(res.statusCode).to.equal(404);
			done();
		});
	});

	it ('should test for correct status code', function(done) {
		request.get('http://localhost:7865/', (err, res, body) => {
			expect(res.statusCode).to.equal(200);
			done();
		});

	})

	it ('should test for correct body', function(done) {
		request.get('http://localhost:7865/', (err, res, body) => {
			expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});
	it ('should return 404 if wrong url', function(done) {
		request.get('http://localhost:7865/test', (err, res, body) => {
			expect(res.statusCode).to.equal(404);
			done();
		})
	})
});
