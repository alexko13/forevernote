var Note = require('./noteModel.js');
var Notebook = require('../notebook/notebookModel.js');

module.exports = {
  getNotes: function(req, res, next) {
    Notebook.findById(req.query._id)
    .populate('notes')
    .exec(function(error, doc) {
      if(error) {
        res.json(error);
      } else {
        res.json(doc);
      }
    });
  },
  
  saveNote: function(req, res, next) {
    var note = req.body;
    console.log(req.body);
    Note.create(note, function(error, savedNote) {
      if(error) {
        res.json(error);
      } else {
        Notebook.findById(note.notebook._id, function(error, savedNotebook) {
          if(error) {
            res.json(error);
          } else {
            savedNotebook.notes.push(savedNote);
            savedNotebook.save(function(error) {
              if(error)  {
                res.json(error);
              } else {
                res.json(savedNote);
              }
            });
          }
        });
      }
    });
  }
};