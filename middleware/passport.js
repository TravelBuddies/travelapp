

'use strict'
const mongoose = require("mongoose");

const { Strategy: LocalStrategy } = require('passport-local')
// const { Strategy: GoogleStrategy } = require('passport-google-oauth20')
const db = require('../models')
// const User = require('../models/userModel')

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password
module.exports = function (passport) {

  // const test = db.User({where: {username}})
  // console.log(test)

  passport.use(new LocalStrategy(
    {
      usernameField: 'username'
    },
     async function(username, password, done) {
      // When a user tries to sign in this code runs
      console.log("passport.js file line 18 " + username, password)

      // const dbUser = await db.User.findOne({ {username} })
      const dbUser = await db.User.findAll()
      
      console.log(dbUser + " line 27")

      if ( !dbUser ) {
        console.log('no user, sorry')
        return done(null, false, {
          message: 'Incorrect username.'
        })
      }

      // If there is a user with the given username, but the password the user gives us is incorrect
      // else if ( !dbUser.validPassword(password) ) {
      //   console.log('wrong password')
      //   return done(null, false, {
      //     message: 'Incorrect password.'
      //   })
      // }

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


