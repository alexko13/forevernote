var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports.use = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../client'));
};