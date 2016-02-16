var mongoose = require('mongoose');
var Notebook = require('../notebook/notebookModel.js');

var NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: Date
});

NoteSchema.pre('save', function(done) {
  this.createdAt = new Date();
  done();
});

module.exports = mongoose.model('Note', NoteSchema);