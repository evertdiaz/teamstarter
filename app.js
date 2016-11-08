var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var emprendedor = require('./routes/emprendedor');
var emprendedores = require('./routes/emprendedores');
var registro = require('./routes/registro');
var login = require('./routes/login');
var startup = require('./routes/startup');
var startups = require('./routes/startups');
var api = require('./routes/api');
var dashboard = require('./routes/dashboard');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://ediazb:ediazb@ds147167.mlab.com:47167/heroku_l27gc88z')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/', index);
app.use('/emprendedor', emprendedor);
app.use('/emprendedores', emprendedores);
app.use('/login', login);
app.use('/registro', registro);
app.use('/startup', startup);
app.use('/startups', startups);
app.use('/api', api);
app.use('/dashboard', dashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
