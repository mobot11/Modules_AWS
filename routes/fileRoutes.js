var File = require('../models/fileModel');

module.exports = function(router) {
	router.route('/files')
	.get(function(req,res) {
		File.find({},function (err,data) {
			if(err) {
				console.log(err);
				res.status(500).json({msg: 'internal server error'});
			}
			res.json(data);
			console.log(data);
		})
	})

	.post(function(req,res) {
		var newFile = new File(req.body);
		newFile.save(function(err,data) {
			if(err) {
				console.log(err)
				res.status(500).json({msg: 'internal server error'})
			}
			res.json(data);
		})
	})
}