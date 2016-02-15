var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.end('Hello World!');
});

app.listen(3000, function() {
  console.log("Listening on port " + 3000);
});