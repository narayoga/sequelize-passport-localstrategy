var express = require('express');
var router = express.Router();
const auth = require('../controllers/authController')
const {player, guild, biodata, history} = require('../models');


router.get('/', (req, res, next) => {
  // res.send('work')
  res.render('register', { 
    title: 'register',
    css: './css/index.css'
  });
});

router.post('/', auth.register)

router.get('/ext', (req,res, next) => {
  res.render('registerExt', {
    title: 'register',
    css: './css/index.css'
  });
});

router.post('/ext', (req,res, next) => {
  let {username, first_name, last_name, birthDate, phone} = req.body;
  biodata.findAll()
  .then(result => {
    biodata.create({
      username,
      first_name,
      last_name,
      birthDate,
      phone,
      playerId: result.length+1
    })
    res.redirect('/register/create')
  })
  .catch(err => {
    console.log(err);
  })
});


router.get('/create', (req,res, next) => {
  // res.send('succesfull')
  biodata.findAll()
  .then(result => {
    history.create({
      win: 0,
      lose: 0,
      playerId: result.length
    })
    res.redirect('/')
  })
  .catch(err => {
    console.log(err);
  })
});


module.exports = router;