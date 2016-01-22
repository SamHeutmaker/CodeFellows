const expect = require('chai').expect;
const Router = require(__dirname + '/../index');

describe('Router', () => {
	// Basic Router Checks
	it('Should be able to create a router with routes', () => {
		var rotuer = new Router();
		expect(router).to.have.property('routes');
		expect(router.routes).to.be.an('object');
	});
	// GET Request
	it('Should be able to register a GET request', () => {
		var router = new Router();
		var called = false
		var fakeReq = {
			method: 'GET',
			url: '/test'
		};

		router.get('/test', function(req, res){
			called = true;
			expect(req.method).to.eql('GET');
			expect(req.url).to.eql('/test');
			expect(res).to.eql(null);
		});

		router.route()(fakeReq, null);
		expect(called).to.eql(true);
	});
	// POST Request
	it('Should be able to register a POST request', () => {
		var router = new Router();
		var called = false
		var fakeReq = {
			method: 'POST',
			url: '/test'
		};

		router.post('/test', function(req, res){
			called = true;
			expect(req.method).to.eql('POST');
			expect(req.url).to.eql('/test');
			expect(res).to.eql(null);
		});

		router.route()(fakeReq, null);
		expect(called).to.eql(true);
	});
	// 404
	it('Should be able to register a GET request', () => {
		var called = 0;
		var testRes = {
			writeHead: function(statusCode, headers) {
				expect(statusCode).to.eql(404);
				called++:
			},
			write: function(msg) {
				expect(msg).to.eql()
			},
			end: function() {

			}
		};


		var router = new Router();

	});
});