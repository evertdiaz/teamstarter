var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teamstarter' });
});

router.get('/conocenos', function(req, res, next) {
  res.render('acerca', { title: 'Conoces' });
});

module.exports = router;
