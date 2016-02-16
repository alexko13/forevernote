var Note = require('./noteModel.js');
var Notebook = require('../notebook/notebookModel.js');

module.exports = {
  getNotes: function(req, res, next) {

    // console.log('in back end notebook is', req.query._id);
    // Notebook.findById(req.query._id)
    // .populate('notes')
    // .exec(function(error, doc) {
    //   console.log('populated notebook', doc);
    // });


    Note.find({
      //"notebook._id": req.query._id
    }, function(error, doc) {
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