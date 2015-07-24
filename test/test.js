var chai = require('chai');
var expect = require('chai').expect;
var chaiHTTP = require('chai-http');

chai.use(chaiHTTP);



describe('/api/users',function () {
	it('should respond to a get request', function(done) {
    chai.request('localhost:8080')
    .get('/api/users')
    .end(function (err, res) {
    	expect(err).to.be.null
    	expect(res).to.have.status(200)
    	done()
    })
	})
})

