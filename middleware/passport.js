

'use strict'
const mongoose = require("mongoose");

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
      let uname = username
      const dbUser = await db.User.find({username: uname})
      
      if ( !dbUser ) {
        console.log('no user, sorry')
        return done(null, false, {
          message: 'Incorrect username.'
        })
      }

      // If none of the above, then the user has been successfully authenticated!
      return done(null, dbUser + ' code is getting to here')
    }
  ))


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


