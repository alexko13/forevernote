var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/forevernote');

app.get('/', function(req, res) {
  res.end('Hello World!');
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port 3000");
});