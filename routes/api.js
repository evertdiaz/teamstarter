var express = require('express')
var router = express.Router()
var User = require('../models').User
var team = require('../models').team

router.get('/users', function(req, res, next) {
  User.find(function(err, user) {
    res.send(user)
  })
})

router.post('/register', function(req, res, next) {
	console.log('BODY: '+req.body)
	var username = req.body.username
	var password = req.body.password
	var nombres = req.body.nombres
	var perfil = req.body.perfil
	var bio = req.body.bio
	var skills = JSON.parse(req.body.skills)
	var phone = req.body.phone
	var mail = req.body.mail

	var newuser = new User()
	newuser.username = username
	newuser.password = password
	newuser.nombres = nombres
	newuser.perfil = perfil
	newuser.bio = bio
	newuser.skills = skills
	newuser.phone = phone
	newuser.mail = mail
	console.log('newuser: '+ newuser)
	newuser.save(function(err, savedUser) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

router.get('/projects', function(req, res, next) {
  team.find(function(err, team) {
    res.send(team)
  })
})

router.post('/project', function(req, res, next) {
	var nombre = req.body.nombre
	var rubro = req.body.rubro
	var resumen = req.body.resumen
	var descripcion = req.body.descripcion
	var nivel = req.body.nivel
	var perfiles = req.body.perfiles
	var mail = req.body.mail
	var newproject = new team()
	newproject.nombre = nombre
	newproject.rubro = rubro
	newproject.resumen = resumen
	newproject.descripcion = descripcion
	newproject.nivel = nivel
	newproject.perfiles = perfiles
	newproject.mail = mail
	newproject.save(function(err, savedProject) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

router.put('/projectup', function(req, res, next) {
	var id = req.params.id
	var project = req.body
	console.log("Actualizando project " + id)
	team('team', function(err,team){
		team.update({'_id':new BSON.ObjectID(id)}, project, {safe :true}, function(err, result) {
			if(err) {
				console.log('Error :(')
				res.send({'error': 'Error ptm :('})
			}
			else {
				console.log(' TODO OK CSMR')
				res.send({project})
			}
		})
	})
})

module.exports =  router