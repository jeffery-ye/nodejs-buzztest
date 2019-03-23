
exports.index = function(req, res, next) {
    res.render('index', { title: 'My Express App' });
  }