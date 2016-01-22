const chai = require('chai');
const chaiHttp = require('chai-http');
	  chai.use(chaiHttp);
const server = require('/../index');
const fs = require('fs');
const expect = chai.expect;
const request = chai.request;
var orgin = 'localhost:3000';
var uri = '/test';

describe('REST functionality of test server', () =>{

	after( () => server.close() );
	
	// GET
	it('should respond to a GET request', ( done ) => {
		request('orgin')
			.get('/uri')
			.end((err,res) => {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('test from get');
				done();
			});
	});
	// POST
	it('should respond to a GET request', ( done ) => {
		request('orgin')
			.post('/uri')
			.end((err,res) => {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('test from post');
				done();
			});
	});
	// PUT
	it('should respond to a GET request', ( done ) => {
		request('orgin')
			.put('/uri')
			.end((err,res) => {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('test from put');
				done();
			});
	});
	// PATCH
	it('should respond to a GET request', ( done ) => {
		request('orgin')
			.patch('/uri')
			.end((err,res) => {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('test from patch');
				done();
			});
	});

});