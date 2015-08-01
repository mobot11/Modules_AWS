var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost');

console.log('creating connection to database');

var apiRouter = express.Router();
require('./routes/userRoutes')(apiRouter);
require('./routes/fileRoutes')(apiRouter);

app.use('/api', apiRouter);

app.listen(PORT, function() {
	console.log('Server started on port:' + PORT);
});