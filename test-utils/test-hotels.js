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

API.getHotel(params)
 .then(function (body) {
	
	var data = JSON.parse(body)
	// console.log(data)
// ******************************** Hotels ********************************
// These variables only display one hotel. We will have to create a for loop to data.results to display multiple results

  // Hotel Name
	var hotelName = data.results[0].property_name
	console.log(hotelName)   

// 	// Hotel Street Address
	var hotelAddress = data.results[0].address.line1
	console.log(hotelAddress) 

	// Hotel City
	var hotelAddress = data.results[0].address.city
	console.log(hotelAddress)

	// Hotel Region
	var hotelRegion = data.results[0].address.region
	console.log(hotelRegion)

	// Hotel Country
	var hotelCountry = data.results[0].address.country
	console.log(hotelCountry)

	// Hotel Postal Code
	var hotelPostalCode = data.results[0].address.postal_code
	console.log(hotelPostalCode)

	// Hotel Currency
	var hotelCurrency = data.results[0].total_price.currency
	console.log(hotelCurrency)
	
	// Hotel Total Price
	var hotelPrice = data.results[0].total_price.amount
	console.log(hotelPrice)

	// Hotel Daily Rate
	var hotelDailyRate = data.results[0].min_daily_rate.amount
	console.log(hotelDailyRate)

	// Hotel Phone Number
	var hotelPhone = data.results[0].contacts[0].detail
	console.log(hotelPhone)

	// Hotel Room Description
	// use a loop to run through all of the description.
	var roomDiscipt = data.results[0].rooms[0].descriptions
		for (var i = 0; i < roomDiscipt.length; i++) {
			roomDiscipt[i]
		console.log(roomDiscipt[i])
		}
	
});

