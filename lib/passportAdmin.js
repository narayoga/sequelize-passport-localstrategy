// const passport = require('passport')
// const localStrategy = require('passport-local').Strategy
// const {admin} = require('../models')

// async function authenticate(username, password, done) {
//   try {
//     console.log('password', password);
//     const data = await admin.authenticate({username, password})
//     return done(null, data)
//   } 
//   catch (err) {
//     return done(err,false, {message: err.message})
//   }
// }

// passport.use (
//   new localStrategy({usernameField:'username', passwordField:'password'}, authenticate)
// )

// passport.serializeUser((user, done) => {
//   done(null, user.id)
// })

// passport.deserializeUser(async (id,done) => {
//   done(null, await admin.findByPk(id))
// })

// module.exports = passport;
