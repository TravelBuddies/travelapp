
'use strict'
console.log('potaotes')
// Requiring our models
const db = require('../models')
// const app = require("express").app();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../middleware/isAuthenticated')
// require('../middleware/passport')


module.exports = (app, passport) => {
    console.log('something to log in')

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, then respond with the user.
  // Otherwise send an error

  app.post('/login', passport.authenticate('local'), ({user}, res) => {
    
    console.log('Log in is working!!!')
    console.log({user})
    // res.send({ user })
    
  })

  // app.post('/login', async function(req, res){
  //   console.log('login working')
  //   const { username, password } = req.body
  //   console.log(username, password)
  //   try {
  //     await db.User.findOne({username, password})
      
  //   }
  //   catch(err){
  //     res.json(err)
  //   }
  //   res.send(res)
  //   console.log('WORKING!!!!')
  //   console.log()
  
  //   res.redirect('/')
  // })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/signup', async function(req, res, next) {
    console.log("another potato of 4500")


    const { username, password } = req.body

    try {
      await db.User.create({ username, password })
      next()
    }
    catch (err) {
      res.json(err)
    }

  }, 
  // passport.authenticate('local'), ({ user }, res) => {
  //   console.log('new user added')
  //   res.send({ user })
  )

  app.get('/user', (req, res) =>{
    res.redirect('/')
  })

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
