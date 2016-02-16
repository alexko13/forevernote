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
  notebook: { 
    type: Number,
    ref: 'Notebook'
  },
  createdAt: Date
});

NoteSchema.pre('save', function(done) {
  // var note = this;
  // Notebook.find({}, function(err, doc) {
  //   console.log("looking for test notebook", doc);
  //   note.notebook = doc[0];
  //   this.createdAt = new Date();
  //   done();
  // });

  this.createdAt = new Date();
  done();
});

module.exports = mongoose.model('Note', NoteSchema);