const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost/test';
const server = require(__dirname + '/../index');
const Bear = require(__dirname + '/../models/bear');

describe('The bears API', () => {
	after( (done) => {
		mongoose.connection.db.dropDatabase(() => {
			done();
		})
	})

	it('should be able to retreive our bears', (done) => {
		chai.request('localhost:3000')
		.get('/api/bears')
		.end( (err, req) => {
			expect(err).to.eql(null);
			expect(Array.isArray(req.body)).to.eql(true);
			done();
		});
	});

	it('should create a bear with a post', (done) => {
		chai.request('localhost:3000')
			.post('/api/bears')
			.send({name: 'test bear'})
			.end((err, res) => {
				expect(err).to.eql(null);
				expect(res).to.have.status(200);
				expect(res.body.name).to.eql('test bear');
				expect(res.body).to.have.property('_id');
				done();
			});
	});

});

describe('Rest requests that already require a bear already in db', () => {
	
	beforeEach((done) => {
		Bear.create({name: 'test bear'}, (err, data) => {
			this.testBear = data;
			done();
		})
	});

	it('should be able to modify a bear', (done) => {
		 chai.request('localhost:3000')
		 .put('/api/bears/' + this.testBear._id)
		 .send({name: 'new bear name'})
		 .end((err, res) => {
		 	expect(err).to.eql(null);
		 	expect(res.body.msg).to.eql('success');
		 	expect(res).to.have.status(200);
		 	done();
		 })
	});

	it('should be able to delete a bear', (done) => {
		chai.request('localhost:3000')
		.delete('/api/bears/' + this.testBear._id)
		.end((err, res) => {
			expect(err).to.eql(null);
			expect(res.body.msg).to.eql('success');
			expect(res).to.have.status(200);
			done();
			})
	})
})




