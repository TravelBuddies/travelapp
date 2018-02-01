const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  password: { type: String, required: true },
  // address: { type: String, required: true },
  // city: { type: String, required: true },
  // state: { type: String, required: true },
  // zipcode: { type: String, required: true },
  // phoneNumber: { type: String, required: true },
  // paymentMethod: String,
  // userCreated: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next) {
  if(this.password) {
    var salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)

  }
  next()
})

const User = mongoose.model("User", userSchema);

module.exports = User;