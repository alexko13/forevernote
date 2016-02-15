var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 3000;
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/forevernote';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));

mongoose.connect(db);
mongoose.connection.on('error', function(error) {
  console.error('Database connection error:' + error);
});
mongoose.connection.once('open', function() {
  console.log('Database connected: ' + db);
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});