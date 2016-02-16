var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('note', UserSchema);