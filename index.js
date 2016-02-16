var express = require('express');
var database = require('./server/database');
var middleware = require('./server/middleware');


var app = express();
var port = process.env.PORT || 3000;

database.connect();
middleware.use(app, express);


app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;