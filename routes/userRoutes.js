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
	      		console.log(data);
	      	});
	      })

	      .post(function(req,res) {
	      	var user = new User(req.body);
	      	user.save(function(err,data) {
	      		if(err) {
	      			res.status(500).json({msg: 'server error'});
	      		}
	      		res.json({msg: 'responding to post'});
	      	})
	      });

	router.route('/users/:id')
	      .get(function(req,res) {
	      	console.log(req.params.id);
	      	var id = req.params.id;
           User.findById(id)       
	      	   .populate('files')
	      	   .exec(function(err,doc) {
	      	      res.json(doc)
	      	      console.log(doc);
	      	 })
	      })

	      .patch(function(req,res) {
	      	var id = req.body.id;
	      	var data =req.body;
	      	console.log(id);
	      	
	      	User.findOneAndUpdate({_id: id}, data, function(err,doc) {
          	if(err) {
          		res.status(500).json({msg: 'internal server error'});
          	}
          	res.json(doc);
	      	})
	      })

	      .delete(function(req,res) {
	      	var id = req.params.id;
	      	User.findByIdAndRemove(id, function(err,data) {
	      		if(err) {
	      			res.status(500).json({msg: 'server error'})
	      		}
	      		res.json(data);
	      		console.log(data);
	      	})
	      })
	      
}