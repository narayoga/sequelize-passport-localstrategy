//lib
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const flash = require('express-flash')
const passport = require('./lib/passport')

var adminRouter = require('./routes/admin')
var app = express();

// setup
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'cat in the box',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//router
app.use('/', adminRouter)

app.get('/blank', (req,res,next) => {
  res.render('blank', {
    title: 'not logged in',
    css: './css/none.css'
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
