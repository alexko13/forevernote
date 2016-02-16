var noteController = require('./noteController');

module.exports = function(app) {
  app.route('/api/note')
  .get(noteController.getNotes)
  .post(noteController.saveNote);
};
