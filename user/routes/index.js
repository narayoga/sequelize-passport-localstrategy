var express = require('express');
const passport = require('../lib/passport');
var router = express.Router();
const restrict = require('../middleware/restrict')
const auth = require('../controllers/authController')

router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'homepage',
    css: './css/index.css'
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/blank',
  failureFlash: true
}))

router.get('/home', restrict, auth.whoami)

module.exports = router;
