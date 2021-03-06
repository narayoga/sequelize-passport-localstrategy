var express = require('express');
var router = express.Router();
const passport = require('../lib/passport');
const restrict = require('../middleware/restrict')
const {player, guild, biodata, server} = require('../models');

router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'admin',
    css: './css/none.css'
  });
});

router.get('/authorization', (req, res, next) => {
  res.render('blank', { 
    title: 'login first',
    css: './css/none.css'
  });
});

router.get('/login', (req, res, next) => {
  res.render('login', { 
    title: 'login',
    css: './css/none.css'
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/authorization',
  failureFlash: true
}));

router.get('/server', restrict, (req, res, next) => {
  server.findAll()
  .then(result => {
    // res.send(result)
    res.render('server', {
      title: "server list",
      css: './css/none.css',
      list: result
    })
  })
  .catch(err => {
    res.send(err);
  })
});

router.get('/guild', restrict, (req, res, next) => {
  guild.findAll()
  .then(result => {
    // res.send(result)
    res.render('guildList', {
      title: "guild list",
      css: './css/none.css',
      list: result
    })
  })
  .catch(err => {
    res.send(err);
  })
});

router.get('guild/:name', restrict, (req,res) =>{ 
  const name = (req.params.name)    
  guild.findOne({
    where:{name},
    include:["server"],
  })  
  .then(result => {
    res.render('guild', {
      title: "guild",
      list: result
    })
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/userlist', restrict, (req,res) => {
  player.findAll()
  .then(result => {
    res.render('list', {
      title: "list",
      css: './css/none.css',
      list: result
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', restrict, (req,res) => {
  player.findAll()
  .then(result => {
    player.destroy({
      where:{
        id: req.params.id
      }
    })
  })
  res.redirect('/userlist')
})

router.get('/:id', restrict, (req,res) =>{ 
  const id = (req.params.id)    
  player.findOne({
    include:{all: true},
    where:{id}
  })  
  .then(result => {
    res.render('list-user', {
      title: "user",
      list: result
    })
    // res.send(result)
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/:id/edit', restrict, (req,res) =>{ //kalo endpoint NAME params harus NAME
  const id = (req.params.id)    //kalo ID params harus ID
  player.findOne({
    include:{all: true},
    where:{id}
  })  
  .then(result => {
    res.render('list-userEdit', {
      title: "edit",
      list: result
    })
    // res.send('ok')
  })
  .catch(err =>{
    res.send(err)
  })
})

router.post('/update/:id', restrict, (req,res) => { 
  const id = (req.params.id)
  let {username, email, password, first_name, last_name, birthDate, phone} = req.body;

  player.update({
    email,
    password
  },{where: {id}})

  biodata.update({
    username,
    first_name, 
    last_name,  
    birthDate, 
    phone
  }, {where: {id}} )

  .then(result => {
    res.send(`data updated <br> <a href='/userlist'>back</a>`)
  })
  .catch(err => {
    res.send(err);
  })
})


module.exports = router;
