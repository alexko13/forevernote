var Note = require('./noteModel.js');

module.exports = {

  getNotes: function(req, res, next) {
    Note.find({}, function(error, doc) {
      if(error) {
        res.json(error);
      } else {
        res.json(doc);
      }
    });
  },
  
  saveNote: function(req, res, next) {
    var note = req.body;
    Note.create(note, function(error, doc) {
      if(error) {
        res.json(error);
      } else {
        res.json(doc);
      }
    });
  }

};