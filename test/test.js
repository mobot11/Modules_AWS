var chai = require('chai');
var expect = require('chai').expect;
var chaiHTTP = require('chai-http');

chai.use(chaiHTTP);



// describe('/api/users',function () {
// 	it('should respond to a get request', function(done) {
//     chai.request('localhost:8080')
//     .get('/api/users')
//     .end(function (err, res) {
//     	expect(err).to.be.null
//     	expect(res).to.have.status(200)
//     	done()
//     })
// 	})
// })

// describe('/api/users/:id', function() {
// 	it('should respond to a get request', function(done) {
// 		chai.request('localhost:8080')
// 		.get('/api/users/55b2e3f816470a919a439bf9')
// 		.end(function (err,res) {
// 			expect(err).to.be.null
// 			expect(res).to.have.status(200);
// 			expect(res).to.be.a('object');
// 			done();
// 		})
// 	})
// })

// describe('/api/users/:id', function() {
// 	it('should respond to a delete request', function(done) {
// 		chai.request('localhost:8080')
// 		.delete('/api/users/55b1bb21161e6517305efffa')
// 		.end(function (err,res) {
// 			expect(err).to.be.null
// 			expect(res).to.have.status(200);
// 			done();
// 		})
// 	})
// })

// describe('/api/users', function() {
// 	it('should respond to a post request', function(done) {
// 		chai.request('localhost:8080')
// 		.post('/api/users')
// 		.send({
// 			name: 'Dylan',
// 			email: 'dylanmoberg@msn.com',
// 		})
// 		.end(function(err,res) {
// 			expect(err).to.be.null;
// 			expect(res).to.have.status(200);
// 			expect(res).to.be.a('object');
// 			done();
// 		})
// 	})
// })

// describe('/api/files', function() {
// 	it('should respond to a post request', function(done) {
// 		chai.request('localhost:8080')
// 		.post('/api/files')
// 		.send({
// 			user: '55b2d568ffbf10448945531d',
//       url: 'test',
// 			fileName: 'myFile',
// 			fileData: 'heres some data'
// 		})
// 		.end(function(err,res) {
// 			expect(err).to.be.null;
// 			expect(res).to.have.status(200)
// 			done();
// 		})
// 	})
// })

// describe('/api/users/:id', function() {
// 	it('should respond to a patch request', function(done) {
// 		chai.request('localhost:8080')
// 		.patch('/api/users/:id')
// 		.send({
// 			id: '55b1c52d714f720d3bc258ed',
// 			email: 'changedThroughTest' 
// 		})
// 		.end(function(err,res) {
// 			expect(err).to.be.null;
// 			expect(res).to.have.status(200);
// 			done();
// 		})
// 	})
// })

describe('/api/users/:id/files', function() {
  it('should respond to a get request', function(done) {
  	chai.request('localhost:8080')
  	.get('/api/users/55b2f6301514db1cac0269ab/files')
  	.end(function(err,res) {
  		expect(err).to.be.null;
  		expect(res).to.have.status(200);
  		done();
  	})
  })
})

// describe('/api/users/:id/files', function() {
//   it('should respond to a post request', function(done) {
//   	chai.request('localhost:8080')
//   	.post('/api/users/55b2f6301514db1cac0269ab/files')
//   	.send({
//   		fileName: 'Testing123',
//   		fileData: 'all the datas'
//   	})
//   	.end(function(err,res) {
//   		expect(err).to.be.null;
//   		expect(res).to.have.status(200);
//   		done();
//   	})
//   })
// })
// db.users.update({_id: ObjectId("55b1c52d714f720d3bc258ed")}, {$set: {"files": ObjectId("55b1c6a6534419f23c56c580")}})















