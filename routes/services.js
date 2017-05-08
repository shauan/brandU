var express = require('express');
var router = express.Router();

/* GET Services page. */
router.get('/', function(req, res, next) {
  res.render('services', { title: 'services' });
});

module.exports = router;
