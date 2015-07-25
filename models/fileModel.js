var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
	_user: { type: Schema.ObjectId, ref: 'User'},
	url: String,
	fileName: String,
	fileData: String
});

module.exports = mongoose.model('Files', fileSchema);