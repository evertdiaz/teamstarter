var express = require('express');
var router = express.Router();
var User = require('../models').User

router.get('/:username', function(req, res, next) {
	// De igual manera sería buscar por name
  User.find({username: req.params.username}, function(err, user) {
    res.render('emprendedor', { data: user, title: "Emprendedores"})
  })
})

module.exports = router;
