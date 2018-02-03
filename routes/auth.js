
'use strict'
// Requiring our models
const db = require('../models')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../middleware/isAuthenticated')


module.exports = (app, passport) => {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, then respond with the user.
  // Otherwise send an error

  app.post('/login', passport.authenticate('local'), ({user}, res) => {
    console.log('auth.js line 17')
    res.redirect('/')
 
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/signup', async function(req, res, next) {

    const { username, password } = req.body

    try {
      await db.User.create({ username, password })
      next()
    }
    catch (err) {
      console.log("abcdefgh", err)
      res.json(err)
    }

  }, 
  passport.authenticate('local'), ({ user }, res) => {
    console.log('new user added')
    res.redirect('/user')
    res.send({ user })
  });
  
  // Route for logging user out
  app.get('/logout', (req, res) => {
    req.logout()
    res.send({})
  })


  // Route for client to check if there's still a live server session
  app.get('/session', isAuthenticated, (req, res) => {
    const { username, id } = req.user
    console.log('we are in session')
    res.json({ user: { username, id }})
  })

}
