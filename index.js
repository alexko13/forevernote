var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('./server/database');
db.connect();

var app = express();

var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));





app.route('/api/note')
  .get(function(req, res, next) {
    console.log('handling get in /api/note');
    res.json('200');
  })
  .post(function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
  });



app.listen(port, function() {
  console.log('Listening on port: ' + port);
});



module.exports = app;