import Keys from "../../../../config/config.js"

var rp = require('request-promise'); 


var API = {
	
	getFlight: function(params) {


=======

		return rp('https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=' + key + '&origin=' + params.origin + '&destination=' + params.dest + '&travel_class=' + params.travClass + '&departure_date=' + params.depart + '&return_date=' + params.returns + '&number_of_results=' + params.numResult)
		// depart and return param's date structure is YYYY-MM-DD. 2018-01-18 is good. 2018-1-18 will break.
	},

	getInspiration: function(params) {


=======

		return rp('https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=' + key + '&departure_date=' + params.depart + '--' + params.returns + '&origin=' + params.origin)
	},

	getHotel: function(params) {


=======

		return rp('https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=' + key + '&location=' + params.dest + '&check_in=' + params.depart + '&check_out=' + params.returns + '&number_of_results=' + params.numResult)

	},

	getCar: function(params) {


=======

		return rp('http://api.sandbox.amadeus.com/v1.2/cars/search-airport?location=JFK&pick_up=' + params.depart + '&drop_off=' + params.returns + '&apikey=' + key)

  },

  getPOI: function(params) {




		return rp('https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?city_name=' + params.city + '&image_size=HD&apikey=' + key)

		// use var city = encodeURIComponent(city) to convert the params.city "New York" into New%20York. This will keep the URL happy :)

	}

}


module.exports = API;

// ****************************** Flight Extensive Search API ****************************

  
//   ****************** OUTBOUND FLIGHT DEPARTURE AND ARRIVAL ***********************
//   These variables only display one round trip ticket. We will have to create a for loop to data.results to display multiple round trip results

//   Flight Departure Info ************************
  
  // Date and Time
  // var outDepartDateTime = body.results[0].itineraries[0].outbound.flights[0].departs_at
//   console.log(data.results);
// })
  
//   // Airport
//   var outDepartAirport = data.results[0].itineraries[0].outbound.flights[0].origin.airport
//   // console.log(outDepartAirport);
  
//   // Terminal
//   var outDepartTerminal = data.results[0].itineraries[0].outbound.flights[0].origin.terminal
//   // console.log(outDepartTerminal);
  
//   // Flight Number
//   var outDepartFlightNum = data.results[0].itineraries[0].outbound.flights[0].flight_number
//   // console.log(outDepartFlightNum);
  
//   // Airline
//   var outAirline = data.results[0].itineraries[0].outbound.flights[0].operating_airline
//   // console.log(outAirline);
  
//   // Aircraft
//   var outAircraft = data.results[0].itineraries[0].outbound.flights[0].aircraft
//   // console.log(outAircraft);
  
//   // Travel Class
//   var outTravelClass = data.results[0].itineraries[0].outbound.flights[0].booking_info.travel_class
//   // console.log(outTravelClass);
  
//   // Seats Remaining
//   var outSeatsRemain = data.results[0].itineraries[0].outbound.flights[0].booking_info.seats_remaining
//   // console.log(outSeatsRemain);

//   // Flight Arrival Info ***************************
  
//   // Date and Time
//   var outArriveDateTime = data.results[0].itineraries[0].outbound.flights[0].arrives_at
//   // console.log(outArriveDateTime);
  
//   // Airport
//   var outArriveAirport = data.results[0].itineraries[0].outbound.flights[0].destination.airport
//   // console.log(outArriveAirport);
  
//   // Terminal
//   var outArriveTerminal = data.results[0].itineraries[0].outbound.flights[0].destination.terminal
//   // console.log(outArriveTerminal);

 
//   // ****************** INBOUND FLIGHT DEPARTURE AND ARRIVAL ***********************
 

//   // Flight Departure Info ************************
  
//   // Date and Time
//   var inDepartDateTime = data.results[0].itineraries[0].inbound.flights[0].departs_at
//   // console.log(inDepartDateTime);
  
//   // Airport
//   var inDepartAirport = data.results[0].itineraries[0].inbound.flights[0].origin.airport
//   // console.log(inDepartAirport);
  
//   // Terminal
//   var inDepartTerminal = data.results[0].itineraries[0].inbound.flights[0].origin.terminal
//   // console.log(inDepartTerminal);
  
//   // Flight Number
//   var inDepartFlightNum = data.results[0].itineraries[0].inbound.flights[0].flight_number
//   // console.log(inDepartFlightNum);
  
//   // Airline
//   var inAirline = data.results[0].itineraries[0].inbound.flights[0].operating_airline
//   // console.log(inAirline);
  
//   // Aircraft
//   var inAircraft = data.results[0].itineraries[0].inbound.flights[0].aircraft
//   // console.log(inAircraft);
  
//   // Travel Class
//   var inTravelClass = data.results[0].itineraries[0].inbound.flights[0].booking_info.travel_class
//   // console.log(inTravelClass);
  
//   // Seats Remaining
//   var inSeatsRemain = data.results[0].itineraries[0].inbound.flights[0].booking_info.seats_remaining
//   // console.log(inSeatsRemain);

//   // Flight Arrival Info ***************************
  
//   // Date and Time
//   var inArriveDateTime = data.results[0].itineraries[0].inbound.flights[0].arrives_at
//   // console.log(inArriveDateTime);
  
//   // Airport
//   var inArriveAirport = data.results[0].itineraries[0].inbound.flights[0].destination.airport
//   // console.log(inArriveAirport);
  
//   // Terminal
//   var inArriveTerminal = data.results[0].itineraries[0].inbound.flights[0].destination.terminal
//   // console.log(inArriveTerminal);


//   // ********************************* ROUND TRIP FLIGHT FARES *******************************
  
//   // Round Trip Price
//   var rtPrice = data.results[0].fare.total_price
//   // console.log(rtPrice)
  
//   // Tax
//   var rtTax = data.results[0].fare.price_per_adult.tax
//   // console.log(rtTax)
  
//   // var rtTotal = (Boolean(rtPrice) + Boolean(rtTax))
//   // console.log(rtTotal)
  
//   // Refundable
//   var rtRefund = data.results[0].fare.restrictions.refundable
//   // console.log(rtRefund)

// });


// ****************************** Flight Inspiration Search API ***************************

=======
// var flightInspirationUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=KEY&departure_date=2018-03-12--2018-03-23&origin=SFO'

// request(flightInspirationUrl, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   var data = JSON.parse(body)



// ******************************* ONE WAY FLIGHT ********************************
// These variables only display one ticket. We will have to create a for loop to data.results to display multiple results
	
	// Departure Airport
// 	var departAirport = data.origin
//   // console.log(departAirport);

//   // Departure Date
//   var departDate = data.results[0].departure_date
//   // console.log(departDate);
  
//   // Arrival Airport
//   var arrivalAirport = data.results[0].destination
//   // console.log(arrivalAirport);

//   // Return Date
//   var returnDate = data.results[0].return_date
//   // console.log(returnDate);

//   // Price
//   var price = data.results[0].price
//   // console.log(price);

//   // Airline
//   var airline = data.results[0].airline
//   // console.log(airline);

// });


// ******************************* Hotel Airport Search API ********************************

=======
// var hotelUrl = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=KEY&location=JFK&check_in=2018-1-18&check_out=2018-1-24&amenity=RESTAURANT&amenity=PARKING&number_of_results=2' 



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

=======
// var rentCarUrl = 'http://api.sandbox.amadeus.com/v1.2/cars/search-airport?location=JFK&pick_up=2018-1-18&drop_off=2018-1-24&apikey=KEY'


  
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


=======
// var pointsOfInterestUrl = 'https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?city_name=New%20York&image_size=HD&apikey=KEY'



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

