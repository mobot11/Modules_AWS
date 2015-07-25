var User = require('../models/userModel');
var File = require('../models/fileModel');
var AWS = require('aws-sdk');

AWS.config.region="us-west-2";

var s3Url = 'http://s3-us-west-2.amazonaws.com/mongofiles11';

module.exports = function(router) {
	router.route('/users')
	      .get(function(req,res) {
	      	User.find({}, function(err, data) {
	      		console.log('/users hit')
	      		if(err) {
	      			res.status(500).json({msg: 'server error'});
	      		}
	      		res.json(data)
	      		// console.log(data);
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
	      	// console.log(req.params.id);
	      	var id = req.params.id;
           User.findById(id)       
	      	   .populate('files')
	      	   .exec(function(err,doc) {
	      	      res.json(doc)
	      	      // console.log(doc);
	      	      // console.log(doc.files);
	      	 })
	      })

	      .patch(function(req,res) {
	      	var id = req.body.id;
	      	var data =req.body;
	      	// console.log(id);
	      	
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
	      		// console.log(data);
	      	})
	      })
	router.route('/users/:id/files')
	      .get(function(req,res) {
	      	var id = req.params.id;
	      	User.findById(id)
	      	.populate('files')
	      	.exec(function(err,doc) {
	      		// console.log(doc);
	      		// console.log(doc.files);
	      		res.json(doc.files);
	      		console.log(doc.files);
	      	})
	      })

	      .post(function(req,res) {
	      	// console.log(req.params.id);
	      	// console.log(req.body)
	      	var bucket = {Bucket: 'mongofiles11/' + req.params.id};
	      	var userId = req.params.id;
	      	var newFileName = req.body.fileName;
	      	var newFileData = req.body.fileData;
	      	// console.log(newFileName)
	      	// console.log(newFileData);
	      	var s3 = new AWS.S3()
	      	var s3bucket = new AWS.S3({params: bucket});
	      	var params = {Key: newFileName, Body: newFileData};
	      	s3bucket.upload(params, function(err, data) {
	      		if (err) {
	      			console.log('error uploading data' + err);
	      			res.json({msg: 'internal server error'})
	      		}
	      		else {
	      			// console.log('successfully uploaded data to mongofiles11/' + newFileName);

	      			var fileUrl = s3Url + userId + newFileName;
	      			var newFile = new File({
	      				_user: userId,
	      				url: fileUrl,
	      				fileName: newFileName,
	      				fileData: newFileData
	      			})
	      			
              
	      			newFile.save(function(err,data) {
	      				if (err) {
	      					res.status(500).json(err)
	      				}
                 
                User.findById(userId, function(err,user) {
                	if (err) {
                		console.log(err)
                	}
                	user.files.push(data);
                	user.save(function(err,data) {
                		if(err) {
                			res.status(500).json({msg: 'Internal Server Error'})
                		}
                		res.json(data);
                		console.log(data);
                	})                	
                })	      		
	      			})	      		
	      		}
	      	})
	      })

  // router.route('/users/:id/files/:file')
}
	      







