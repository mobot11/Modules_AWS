var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var PORT = process.env.PORT || 8000;
var app = express();

app.bodyParser(json());

mongoose.connect('mongodb://localhost');

console.log('creating connection to database');