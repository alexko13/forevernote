var notebookController = require('./notebookController');

module.exports = function(app) {
  app.route('/api/notebook')
  .get(notebookController.getNotebooks)
  .post(notebookController.saveNotebook);
};
