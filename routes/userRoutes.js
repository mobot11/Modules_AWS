var User = require('../models/userModel');
var Files = require('../models/fileModel');

module.exports = function(router) {
	router.route('/users')
	      .get(function(req,res) {
	      	User.find({}, function(err, data) {
	      		console.log('/users hit')
	      		if(err) {
	      			res.status(500).json({msg: 'server error'});
	      		}
	      		res.json(data)
	      	});
	      })
}