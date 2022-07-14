const {player} = require('../models')
const passport = require('../lib/passport')

module.exports = {
  register: (req, res, next) => {
    console.log('active')
    player.register(req.body)
    .then(()=>{
      res.redirect('/register/ext')
    })
    .catch(err =>(err))
  },

  whoami: (req,res) => {
    res.render('index-login', {
      title: 'homepage',
      css: './css/index.css',
      data: req.user.dataValues
    })
    // res.send(req.user.dataValues)
  },
  
  main: (req,res) =>{ 
    const id = (req.params.id)    
    player.findOne({
      include:{all: true},
      where:{id}
    })  
    .then(result => {
      res.render('page2', {
        title: 'gameplay',
        css: './css/main.css',
        data: result
      })
      // res.send(result)
    })
    .catch(err =>{
      res.send(err)
    })
  },
  
}

// (req,res) => {
//   res.render('page2', {
//     title: 'gameplay',
//     css: './css/main.css',
//     data: req.user.dataValues
//   })
// }