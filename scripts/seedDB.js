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
        "_id": "5a669cfdfbcce50ee4c0a8b2",
        "username": "bobster",
        "firstName": "Bob",
        "lastName": "test",
        "password": "12345",
        "address": "5432 postman",
        "city": "san fran",
        "state": "ca",
        "zipcode": "94102",
        "phoneNumber": "1234567",
        "paymentMethod": "bitcoin",
        "__v": 0,
        "userCreated": "2018-01-23T02:25:01.111Z"
    }
    {
        "_id": "5a6df506672a6d0b634cfc99",
        "username": "audiofile",
        "firstName": "Rick",
        "lastName": "Rubin",
        "password": "0987",
        "address": "2021 Glastonbury Rd",
        "city": "Westlake Village",
        "state": "CA",
        "zipcode": "91361",
        "phoneNumber": "323-873-8965",
        "__v": 0,
        "userCreated": "2018-01-28T16:06:30.564Z"
    },
    {
        "_id": "5a705b355cb8150a9109e4ec",
        "username": "jaguarsurfer",
        "firstName": "Dick",
        "lastName": "Dale",
        "password": "5938",
        "address": "857 Surfer Way",
        "city": "Long Beach",
        "state": "CA",
        "zipcode": "94832",
        "phoneNumber": "496-930-3946",
        "__v": 0,
        "userCreated": "2018-01-30T11:47:01.293Z"
    },
    {
        "_id": "5a70ecb71e99ab0b6d3997ae",
        "username": "traveljunky92",
        "firstName": "Chris",
        "lastName": "Holloway",
        "password": "jakela",
        "address": "1555 Riviera",
        "city": "Walnut Creek",
        "state": "CA",
        "zipcode": "94596",
        "phoneNumber": "329-592-0845",
        "__v": 0,
        "userCreated": "2018-01-30T22:07:51.354Z"
    },
    {
        "_id": "5a70edaf1e99ab0b6d3997af",
        "username": "steveo",
        "firstName": "Steve",
        "lastName": "Jobs",
        "password": "8749403",
        "address": "838 Apple Rd",
        "city": "Mountain View",
        "state": "CA",
        "zipcode": "94757",
        "phoneNumber": "839-856-5859",
        "__v": 0,
        "userCreated": "2018-01-30T22:11:59.451Z"
    }
]

const travelHistorySeed = [
{
    "_id" : ObjectId("5a6717a0b0d8d644f14228f5"),
    "fightNumber" : "12543",
    "flightDest" : "JFK",
    "flightOrg" : "SFO",
    "flightDate" : "2018-01-23",
    "flightPrice" : "359.00",
    "hotelName" : "Crowne Plaza",
    "hotelCheckIn" : "2018-01-23",
    "hotelCheckOut" : "2018-01-28",
    "hotelPrice" : "750.00",
    "carCompany" : "Hertz",
    "carLocation" : "New York",
    "carType" : "Sedan",
    "carPrice" : "800.00",
    "grandTotalPrice" : "1,909.00",
    "paymentMethod" : "Bitcoin",
    "_user" : ObjectId("5a72a59ad7106e08775c4d0f"),
    "paymentDate" : ISODate("2018-01-23T02:25:01.111Z"),
    "__v" : 0
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

