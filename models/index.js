var mongoose = require('mongoose')

var Schema =  mongoose.Schema

var UserSchema = new Schema({
	username: String,
	password: String,
	perfil: String,
	bio: String,
	skills: String,
	phone: Number,
	mail: String
})
mongoose.model('user', UserSchema) 
var User = mongoose.model('user')

var teamSchema = new Schema({
	nombre: String,
	rubro: String,
	resumen: String,
	descripcion: String,
	nivel: String,
	perfiles: String,
	mail: String,
	user: {
		type: Schema.ObjectId,
		ref: 'user'
	}
})
mongoose.model('team', teamSchema)
var team = mongoose.model('team')

module.exports.User = User
module.exports.team = team