var API = require("./test-API")


var params = {
		origin : 'SFO',
		dest :'JFK',
		travClass :'ECONOMY',
    // depart and return param's date structure is YYYY-MM-DD. 2018-01-18 is good. 2018-1-18 will break.
		depart :'2018-03-12',
		returns :'2018-03-23',
		numResult :'2'
}

API.getInspiration(params)
 .then(function (body) {
	
	var data = JSON.parse(body)
	// console.log(data)

	// ****************************** Flight Inspiration Search API ***************************


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