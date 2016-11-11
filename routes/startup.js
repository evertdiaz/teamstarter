var express = require('express');
var router = express.Router();
var team = require('../models').team

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('descripcion', { title: 'Startup' });
});

router.get('/crear', function(req, res, next) {
	res.render('startup-create', {title: "Crear Startups"})
});


router.get('/:nombre', function(req, res, next) {
	// De igual manera sería buscar por name
  team.find({nombre: req.params.nombre}, function(err, user) {
    res.render('startup', { data: user, title: "Startup"})
  })
})

module.exports = router;
