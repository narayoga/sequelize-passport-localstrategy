const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const {player} = require('../models')

async function authenticate(email, password, done) {
  try {
    const data = await player.authenticate({email, password})
    return done(null, data)
  } 
  catch (err) {
    return done(err, false, {message: err.message})
  }
}

passport.use (
  new localStrategy({usernameField:'email', passwordField:'password'}, authenticate)
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id,done) => {
  done(null, await player.findByPk(id))
})

module.exports = passport;
