var express = require('express');
const passport = require('../lib/passport');
var router = express.Router();
const restrict = require('../middleware/restrict')
const auth = require('../controllers/authController')
const {player, guild, biodata, history} = require('../models');

router.get('/:id', auth.main)
router.post('/:id', (req,res) => {
  const id = (req.params.id)
  let {win,lose} = req.body;
  console.log(req.body);

  history.update({
    win,
    lose
  },{where: {id:id}})
  .then(result => {
    res.redirect('/gameover')
    console.log('data updated',result)
  })
  .catch(err => {
    res.send(err);
  })
})

module.exports = router;