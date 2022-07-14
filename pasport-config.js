// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt')

// function initialize(passport, getUserByUser, getUserById) {
//   const authenticateUser = async (user,password,done) => {
//     const userAdmin = getUserByUser(user)
//     if (userAdmin == null) {
//       return done(null, false, {message: 'no user'})
//     }

//     try {
//       if(await bcrypt.compare(password, userAdmin.password )){
//         return done (null, userAdmin)
//       }else {
//         return done(null,false, {message: 'wrong password'})
//       }
//     } catch (error) {
//       return done(error)
//     }
//   }

//   passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password'}, authenticateUser))
//   passport.serializeUser((user, done) => done(null,user.id))
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserById(id))
//   })
// }

// module.exports = initialize