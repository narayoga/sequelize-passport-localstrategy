//lib
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const flash = require('express-flash')
const passport = require('./lib/passport')
const auth = require('./controllers/authController')
const restrict = require('./middleware/restrict')

const {player,history} = require('./models')

// const {admin} =require('./models')

// const initializePassport = require('./pasport-config')

// initializePassport(
//   passport,
//   user => admin.findOne({
//     where:{username},
//   }),
//   id => admin.findOne({
//     where:{id},
//   }),
// )

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register')
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
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/page2',restrict, usersRouter);
app.get('/blank', (req,res,next) => {
  res.render('blank', {
    title: 'not logged in',
    css: './css/none.css'
  })
})
app.get('/gameover', (req,res) => {
  player.findAll({ 
    include: { all: true }, 
    order: [[history, 'win', 'DESC']]
  })
  .then(result => {
    res.render('gameover', {
      title: 'gameover',
      css: './css/none.css',
      data: result
    })
    // res.send(result)
  })
  .catch(err => {
    res.send(err);
  })
})

// app.post('/admin', passport.authenticate('local', {
//   successRedirect: '/admin',
//   failureRedirect: '/blank',
//   failureFlash: true
// }))
app.use('/admin', adminRouter)

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
