var express = require('express')
var router = express.Router()
var User = require('../models').User

router.get('/users', function(req, res, next) {
  User.find(function(err, user) {
    res.send(user)
  })
})

router.post('/register', function(req, res, next) {
	var username = req.body.name
	var password = req.body.password
	var perfil = req.body.perfil
	var bio = req.body.bio
	var skills = req.body.skills
	var phone = req.body.phone
	var mail = req.body.mail

	var newuser = new User()
	newuser.username = username
	newuser.password = password
	newuser.perfil = perfil
	newuser.bio = bio
	newuser.skills = skills
	newuser.phone = phone
	newuser.mail = mail
	newuser.save(function(err, savedUser) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

module.exports =  router