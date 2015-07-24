var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	fileName: String,
	fileData: String
});

module.exports = mongoose.model('Files', fileSchema);