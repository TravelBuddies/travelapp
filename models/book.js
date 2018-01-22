const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  payment method: String,
  flight: String,
  hotel: String,
  car: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
