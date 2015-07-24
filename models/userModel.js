var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var userSchema = Schema ({
	name: String,
	email: String,
	files: [{type: Schema.Types.ObjectId, ref: 'Files'}]
});

module.exports = mongoose.model('User', userSchema);