var express = require('express');
var router = express.Router();
const passport = require('../lib/passport');
const auth = require('../controllers/authController')
const {player, guild, biodata, server} = require('../models');

router.get('/', (req, res, next) => {
  res.render('./admin/index', { 
    title: 'admin',
    css: './css/none.css'
  });
});

router.get('/server', (req, res, next) => {
  server.findAll()
  .then(result => {
    // res.send(result)
    res.render('./admin/server', {
      title: "server list",
      css: './css/none.css',
      list: result
    })
  })
  .catch(err => {
    res.send(err);
  })
});

router.get('/guild', (req, res, next) => {
  guild.findAll()
  .then(result => {
    // res.send(result)
    res.render('./admin/guildList', {
      title: "guild list",
      css: './css/none.css',
      list: result
    })
  })
  .catch(err => {
    res.send(err);
  })
});

router.get('/guild/:name', (req,res) =>{ 
  const name = (req.params.name)    
  guild.findOne({
    where:{name},
    include:["server"],
  })  
  .then(result => {
    res.render('./admin/guild', {
      title: "guild",
      list: result
    })
    // res.send(result)
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/userlist', (req,res) => {
  player.findAll()
  .then(result => {
    // res.send(result);
    res.render('./admin/list', {
      title: "list",
      css: './css/none.css',
      list: result
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req,res) => {
  player.findAll()
  .then(result => {
    player.destroy({
      where:{
        id: req.params.id
      }
    })
  })
  res.redirect('/admin/userlist')
})

router.get('/:id', (req,res) =>{ 
  const id = (req.params.id)    
  player.findOne({
    include:{all: true},
    where:{id}
  })  
  .then(result => {
    res.render('./admin/user', {
      title: "user",
      list: result
    })
    // res.send(result)
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/:id/edit', (req,res) =>{ //kalo endpoint NAME params harus NAME
  const id = (req.params.id)    //kalo ID params harus ID
  player.findOne({
    include:{all: true},
    where:{id}
  })  
  .then(result => {
    res.render('./admin/userEdit', {
      title: "edit",
      list: result
    })
    // res.send('ok')
  })
  .catch(err =>{
    res.send(err)
  })
})

router.post('/update/:id', (req,res) => { 
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
    res.send('data updated')
  })
  .catch(err => {
    res.send(err);
  })
})


module.exports = router;
