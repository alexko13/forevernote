var Notebook = require('./notebookModel.js');

module.exports = {
  getNotebooks: function(req, res, next) {
     Notebook.find({}, function(error, doc) {
      if(error) {
        res.json(error);
      } else {
        res.json(doc);
      }
    });
  },
  
  saveNotebook: function(req, res, next) {
    var notebook = req.body;
    Notebook.create(notebook, function(error, doc) {
      if(error) {
        res.json(error);
      } else {
        res.json(doc);
      }
    });
  }
};