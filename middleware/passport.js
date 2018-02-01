
'use strict'

const { Strategy: LocalStrategy } = require('passport-local')
// const { Strategy: GoogleStrategy } = require('passport-google-oauth20')
const db = require('../models')

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password
module.exports = function (passport) {

  passport.use(new LocalStrategy(
    {
      usernameField: 'username'
    },
    async function(username, password, done) {
      // When a user tries to sign in this code runs
      const dbUser = await db.User.findOne({ where: { username } })

      if ( !dbUser ) {
        return done(null, false, {
          message: 'Incorrect username.'
        })
      }

      // If there is a user with the given username, but the password the user gives us is incorrect
      else if ( !dbUser.validPassword(password) ) {
        return done(null, false, {
          message: 'Incorrect password.'
        })
      }

      // If none of the above, then the user has been successfully authenticated!
      return done(null, dbUser)
    }
  ))

//   passport.use(new GoogleStrategy({
//     clientID: '922670117255-bcnqfjfaqpc8h7d1ct293i25t1465gv5.apps.googleusercontent.com',
//     clientSecret: 'C26VJGFvSwS0cd261A3ZlFtE',
//     callbackURL: 'http://www.example.com/auth/google/callback'
//   },
//   function(accessToken, refreshToken, profile, cb){
//     User.findOrCreate({ googleId: profile.id }, function(err, user){
//       return cb(err, user);
//     });
//   }
// ));

  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.

  passport.serializeUser(({ id }, cb) => {
    cb(null, { id })
  })

  passport.deserializeUser(({ id }, cb) => {
    db.User.findOne({ where: { id }, attributes: [ 'username', 'id' ]})
      .then( user => {
        cb(null, user)
      })
  })
  
}


