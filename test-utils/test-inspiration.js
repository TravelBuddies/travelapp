var API = require("./test-API")
// var axios = require("axios")

var params = {
		origin : 'SFO',
		depart :'2018-03-12',
		returns :'2018-03-23'
}

API.getInspiration(params)
 .then(function (body) {
	
	var data = JSON.parse(body)
	// console.log(data)

	// ****************************** Flight Inspiration Search API ***************************
// var flightInspirationUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=FnGOGF06PziG0dMUdXc9cXJbWDwAgurZ&departure_date=2018-03-12--2018-03-23&origin=SFO'

// request(flightInspirationUrl, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   var data = JSON.parse(body)

  // console.log(data)

// ******************************* ONE WAY FLIGHT ********************************
// These variables only display one ticket. We will have to create a for loop to data.results to display multiple results
	
	// Departure Airport
	var departAirport = data.origin
  console.log(departAirport);

//   // Departure Date
  var departDate = data.results[0].departure_date
  console.log(departDate);
  
  // Arrival Airport
  var arrivalAirport = data.results[0].destination
  console.log(arrivalAirport);

  // Return Date
  var returnDate = data.results[0].return_date
  console.log(returnDate);

  // Price
  var price = data.results[0].price
  console.log(price);

  // Airline
  var airline = data.results[0].airline
  console.log(airline);


})