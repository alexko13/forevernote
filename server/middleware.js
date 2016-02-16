var morgan = require('morgan');
var bodyParser = require('body-parser');
var noteRouter = require('./note/noteRouter');
var notebookRouter = require('./notebook/notebookRouter');

module.exports.use = function(app, express) {
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(express.static(__dirname + '/../client'));

  noteRouter(app);
  notebookRouter(app);
};