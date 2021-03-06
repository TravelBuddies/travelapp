const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session")
const router = require("express").Router();

const passport = require("passport")
const app = express();

const PORT = process.env.PORT || 3001;



// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
app.use(session(
	{
		secret: 'travel donkey',
		resave: true,
		saveUninitialized: true
	}
	))
require('./middleware/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

require("./routes/auth")(app, passport)
require("./routes")


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userinfo",
  {
    useMongoClient: true
  }
);
var db = mongoose.connection


db.on("open", console.error.bind(console, " ==> ***** Connected to MongoDB userinfo *****"))



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
