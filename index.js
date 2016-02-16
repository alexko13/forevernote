var express = require('express');
var db = require('./server/database');
var middleware = require('./server/middleware');


var app = express();
var port = process.env.PORT || 3000;




db.connect();
middleware.use(app, express);


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