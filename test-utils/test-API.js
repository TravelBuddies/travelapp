// const Swagger = require('swagger-client'); 
// var request = require('request');
// var axios = require("axios")
// var bodyParser = require('body-parser')
// const Swagger = require('swagger-client'); 
var rp = require('request-promise'); 


var API = {
	
	getFlight: function(params) {
		var key = 'FnGOGF06PziG0dMUdXc9cXJbWDwAgurZ'
		return rp('https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=' + key + '&origin=' + params.origin + '&destination=' +params.dest + '&travel_class=' + params.travClass + '&departure_date=' + params.depart + '&return_date=' + params.returns + '&number_of_results=' +  params.numResult)
	},

	getInspiration: function(params) {
		var key = 'FnGOGF06PziG0dMUdXc9cXJbWDwAgurZ'
		return rp('https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=' + key + '&departure_date=' + params.depart + '--' + params.returns + '&origin=' + params.origin)
	}
		

}


module.exports = API;



// ******************************* Hotel Airport Search API ********************************
// var hotelUrl = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=FnGOGF06PziG0dMUdXc9cXJbWDwAgurZ&location=JFK&check_in=2018-1-18&check_out=2018-1-24&amenity=RESTAURANT&amenity=PARKING&number_of_results=2' 

// request(hotelUrl, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   var data = JSON.parse(body)
  // console.log(data.results;

// ******************************** Hotels ********************************
// These variables only display one hotel. We will have to create a for loop to data.results to display multiple results

  // Hotel Name
// 	var hotelName = data.results[0].property_name
// 	console.log(hotelName)   

// 	// Hotel Street Address
// 	var hotelAddress = data.results[0].address.line1
// 	console.log(hotelAddress) 

// 	// Hotel City
// 	var hotelAddress = data.results[0].address.city
// 	console.log(hotelAddress)

// 	// Hotel Region
// 	var hotelRegion = data.results[0].address.region
// 	console.log(hotelRegion)

// 	// Hotel Country
// 	var hotelCountry = data.results[0].address.country
// 	console.log(hotelCountry)

// 	// Hotel Postal Code
// 	var hotelPostalCode = data.results[0].address.postal_code
// 	console.log(hotelPostalCode)

// 	// Hotel Currency
// 	var hotelCurrency = data.results[0].total_price.currency
// 	console.log(hotelCurrency)
	
// 	// Hotel Total Price
// 	var hotelPrice = data.results[0].total_price.amount
// 	console.log(hotelPrice)

// 	// Hotel Daily Rate
// 	var hotelDailyRate = data.results[0].min_daily_rate.amount
// 	console.log(hotelDailyRate)

// 	// Hotel Phone Number
// 	var hotelPhone = data.results[0].contacts[0].detail
// 	console.log(hotelPhone)

// 	// Hotel Room Description
// 	// use a loop to run through all of the description.
// 	var roomDiscipt = data.results[0].rooms[0].descriptions
// 		for (var i = 0; i < roomDiscipt.length; i++) {
// 			roomDiscipt[i]
// 		console.log(roomDiscipt[i])
// 		}
	
// });


// *********************************** Rental Car Search API **********************************
// var rentCarUrl = 'http://api.sandbox.amadeus.com/v1.2/cars/search-airport?location=JFK&pick_up=2018-1-18&drop_off=2018-1-24&apikey=FnGOGF06PziG0dMUdXc9cXJbWDwAgurZ'

// request(rentCarUrl, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   var data = JSON.parse(body)
  
// ********************************** Rental Cars **************************

	// Company
// 	var carCompany = data.results[0].provider.company_name
//   console.log(carCompany);

//   // Car Location
// 	var carLocation = data.results[0].address.line1
//   console.log(carLocation);

//   // Car Transmission
// 	var carsTrans = data.results[0].cars[0].vehicle_info.transmission
//   console.log(carsTrans);

//   // Car Fuel
// 	var carFuel = data.results[0].cars[0].vehicle_info.fuel
//   console.log(carFuel);

//   // Car Air Conditioning (true or false)
// 	var carAirCon = data.results[0].cars[0].vehicle_info.air_conditioning
//   console.log(carAirCon);

//   // Car Category
// 	var carCategory = data.results[0].cars[0].vehicle_info.category
//   console.log(carCategory);

//   // Car Type
// 	var carType = data.results[0].cars[0].vehicle_info.type
//   console.log(carType);

//   // Image
//   // not very reliable
// 	var carImage = data.results[0].cars[0].images[0].url
//   console.log(carImage);
  
//   // Car Rates ***************************************

//   // Priced Type
// 	var carPricedType = data.results[0].cars[0].rates[0].type
//   console.log(carPricedType);

//   // Price of Price Type
// 	var carPrice = data.results[0].cars[0].rates[0].price.amount
//   console.log(carPrice);

//   // Estimated Total Price
// 	var carTotalPrice = data.results[0].cars[0].estimated_total.amount
//   console.log(carTotalPrice);

//   // Currency
// 	var carCurrency = data.results[0].cars[0].rates[0].price.currency
//   console.log(carCurrency);

// });


// *********************************** Points of Interest API **********************************

// var pointsOfInterestUrl = 'https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?city_name=New%20York&image_size=HD&apikey=FnGOGF06PziG0dMUdXc9cXJbWDwAgurZ'

// request(pointsOfInterestUrl, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   var data = JSON.parse(body)

// ************************************** Points of Interest **********************************
  
	// City
// 	var poiCity = data.current_city.name
//   console.log(poiCity);

//   // Title
// 	var poiTitle = data.points_of_interest[0].title
//   console.log(poiTitle);

//   // Categories
// 	var poiCategories = data.points_of_interest[0].categories
// 	// use a loop to run through all of the categories.
//   for (var i = 0; i < poiCategories.length; i++) {
// 			poiCategories[i]
// 		console.log(poiCategories[i])
// 		}

// 	// Image
// 	var poiImage = data.points_of_interest[0].main_image
//   console.log(poiImage);

//   // Description
// 	var poiDescript = data.points_of_interest[0].details.description
//   console.log(poiDescript);

//   // Description
// 	var poiMapLink = data.points_of_interest[0].location.google_maps_link
//   console.log(poiMapLink);

// });

