const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose')

const userModel = new Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  paymentMethod: String,
  userCreated: { type: Date, default: Date.now }
});

// User.plugin(passportLocalMongoose);

userModel.pre('save', function(next) {
  if(this.password) {
    var salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)

  }

userModel.prototype.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

  next()
})

// const User = mongoose.model("User", User);

// module.exports = User;
module.exports = mongoose.model('User', userModel)