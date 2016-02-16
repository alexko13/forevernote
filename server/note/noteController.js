var Note = require('./noteModel.js');

module.exports = {

  saveNote: function(req, res, next) {
    console.log(req.body);
    //save note to db
  },

  getNotes: function(req, res, next) {
    //retrieve notes from db
  }
};