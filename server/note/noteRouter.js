var noteController = require('./noteController');

module.exports = function(app) {
  app.route('/api/note')
  
  .get(function(req, res, next) {
    res.json(req.body);
  })

  .post(function (req, res, next) {
    res.json(req.body);
  });
};
