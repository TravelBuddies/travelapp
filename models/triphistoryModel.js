const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripHistorySchema = new Schema({
  fightNumber: String,
  flightDest: String,
  flightOrg: String,
  flightDate: String,
  flightPrice: String,
  hotelName: String,
  hotelCheckIn: String,
  hotelCheckOut: String,
  hotelPrice: String,
  carCompany: String,
  carLocation: String,
  carType: String,
  carPrice: String,
  grandTotalPrice: String,
  paymentMethod: String,
  paymentDate: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
});

const TripHistory = mongoose.model("TripHistory", TripHistorySchema);

module.exports = TripHistory;