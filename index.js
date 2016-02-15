var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));







var db = process.env.MONGOLAB_URI || 'mongodb://localhost/forevernote';
mongoose.connect(db);
mongoose.connection.on('error', function(error) {
  console.error('Database connection error:' + error);
});
mongoose.connection.once('open', function() {
  console.log('Database connected to ' + db);
});



app.get('/', function(req, res) {
  res.end('Hello World!');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});