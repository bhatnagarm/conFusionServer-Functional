const createError = require('http-errors')
// Var express = require('express');
const fastify = require('fastify')({
	logger: {
		prettyPrint: true
	}
})
const path = require('path')
// Var cookieParser = require('cookie-parser');
const logger = require('morgan')

// Var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter')
const leaderRouter = require('./routes/leaderRouter')

const mongoose = require('mongoose')
const Dishes = require('./models/dishes')

const url = 'mongodb://localhost:27017/conFusion'
const connect = mongoose.connect(url)

connect.then(
	db => {
		console.log('Connected Correctly to server')
	},
	err => {
		console.log(err)
	}
)
// Var app = express();

// view engine setup
// fastify.set('views', path.join(__dirname, 'views'));
// fastify.set('view engine', 'jade');

// fastify.register(indexRouter, {prefix: '/'});
// fastify.register(usersRouter, {prefix: '/users'});
fastify.register(require('./routes/dish-router'))
fastify.register(require('fastify-sensible'))
// Fastify.register(promoRouter, {prefix: '/promotions'});
// fastify.register(leaderRouter, {prefix: '/leaders'});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/dishes', dishRouter);
// app.use('/promotions', promoRouter);
// app.use('/leaders',leaderRouter);

fastify.use(logger('dev'))
// App.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// fastify.listen(3000);
// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

module.exports = fastify
