var mongoose = require('mongoose');

var NotebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  }],
  createdAt: Date
});

NotebookSchema.pre('save', function(done) {
  this.createdAt = new Date();
  done();
});

module.exports = mongoose.model('Notebook', NotebookSchema);