var mongoose = require('mongoose');

var db = process.env.MONGOLAB_URI || 'mongodb://localhost/forevernote';

module.exports.connect = function() {
  mongoose.connect(db);
  mongoose.connection.on('error', function(error) {
    console.error('Database connection error:' + error);
  });
  mongoose.connection.once('open', function() {
    console.log('Database connected: ' + db);
  });
};
