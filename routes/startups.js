var express = require('express')
var router = express.Router()
var Team = require('../models').team

/* GET home page. */
router.get('/', function(req, res, next) {
	Team.find(function(err, teams) {
		res.render('startups', { data: teams, title: "Startups"})
	})
});

module.exports = router;
