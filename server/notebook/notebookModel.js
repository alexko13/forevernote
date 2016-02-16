var mongoose = require('mongoose');

var NotebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: Date
});

NotebookSchema.pre('save', function(done) {
  this.createdAt = new Date();
  done();
});

module.exports = mongoose.model('notebook', NotebookSchema);