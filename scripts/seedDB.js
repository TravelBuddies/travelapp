const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the User collection and inserts the Users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userinfo",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    username: "jake7",
    firstName: "Jake",
    lastName: "Chaplin",
    password: "1234",
    address: '601 Van Ness Ave.',
    city: 'San Francisco',
    state: 'CA',
    zipcode: '94102',
    phoneNumber: '408-656-0312',
    paymentMethod: '',
    date: new Date(Date.now())
  },
  {
    username: "bobster",
    firstName: "Bob",
    lastName: "Lends",
    password: "4321",
    address: '426 Cool St.',
    city: 'Oakland',
    state: 'CA',
    zipcode: '89342',
    phoneNumber: '111-222-3333',
    paymentMethod: 'Bitcoin',
    date: new Date(Date.now())
  },
  {
    username: "slater674",
    firstName: "Steve",
    lastName: "Richardson",
    password: "8724",
    address: '3781 Rode St.',
    city: 'Sunnyvale',
    state: 'CA',
    zipcode: '97320',
    phoneNumber: '222-333-4444',
    paymentMethod: 'Visa',
    date: new Date(Date.now())
  }
]

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

