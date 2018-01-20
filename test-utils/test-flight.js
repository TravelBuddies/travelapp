var API = require("./test-API")
// var axios = require("axios")

var params = {
		origin : 'SFO',
		dest :'JFK',
		travClass :'ECONOMY',
		depart :'2018-03-12',
		returns :'2018-03-23',
		numResult :'2'
}

API.getFlight(params)
 .then(function (body) {
	
	var data = JSON.parse(body)
	  //   ****************** OUTBOUND FLIGHT DEPARTURE AND ARRIVAL ***********************
//   These variables only display one round trip ticket. We will have to create a for loop to data.results to display multiple round trip results

//   Flight Departure Info ************************
  
//   Date and Time
  var outDepartDateTime = data.results[0].itineraries[0].outbound.flights[0].departs_at
  console.log(outDepartDateTime);
  
  // Airport
  var outDepartAirport = data.results[0].itineraries[0].outbound.flights[0].origin.airport
  // console.log(outDepartAirport);
  
  // Terminal
  var outDepartTerminal = data.results[0].itineraries[0].outbound.flights[0].origin.terminal
  // console.log(outDepartTerminal);
  
  // Flight Number
  var outDepartFlightNum = data.results[0].itineraries[0].outbound.flights[0].flight_number
  // console.log(outDepartFlightNum);
  
  // Airline
  var outAirline = data.results[0].itineraries[0].outbound.flights[0].operating_airline
  // console.log(outAirline);
  
  // Aircraft
  var outAircraft = data.results[0].itineraries[0].outbound.flights[0].aircraft
  // console.log(outAircraft);
  
  // Travel Class
  var outTravelClass = data.results[0].itineraries[0].outbound.flights[0].booking_info.travel_class
  // console.log(outTravelClass);
  
  // Seats Remaining
  var outSeatsRemain = data.results[0].itineraries[0].outbound.flights[0].booking_info.seats_remaining
  // console.log(outSeatsRemain);

  // Flight Arrival Info ***************************
  
  // Date and Time
  var outArriveDateTime = data.results[0].itineraries[0].outbound.flights[0].arrives_at
  // console.log(outArriveDateTime);
  
  // Airport
  var outArriveAirport = data.results[0].itineraries[0].outbound.flights[0].destination.airport
  // console.log(outArriveAirport);
  
  // Terminal
  var outArriveTerminal = data.results[0].itineraries[0].outbound.flights[0].destination.terminal
  // console.log(outArriveTerminal);

 
  // ****************** INBOUND FLIGHT DEPARTURE AND ARRIVAL ***********************
 

  // Flight Departure Info ************************
  
  // Date and Time
  var inDepartDateTime = data.results[0].itineraries[0].inbound.flights[0].departs_at
  // console.log(inDepartDateTime);
  
  // Airport
  var inDepartAirport = data.results[0].itineraries[0].inbound.flights[0].origin.airport
  // console.log(inDepartAirport);
  
  // Terminal
  var inDepartTerminal = data.results[0].itineraries[0].inbound.flights[0].origin.terminal
  // console.log(inDepartTerminal);
  
  // Flight Number
  var inDepartFlightNum = data.results[0].itineraries[0].inbound.flights[0].flight_number
  // console.log(inDepartFlightNum);
  
  // Airline
  var inAirline = data.results[0].itineraries[0].inbound.flights[0].operating_airline
  // console.log(inAirline);
  
  // Aircraft
  var inAircraft = data.results[0].itineraries[0].inbound.flights[0].aircraft
  // console.log(inAircraft);
  
  // Travel Class
  var inTravelClass = data.results[0].itineraries[0].inbound.flights[0].booking_info.travel_class
  // console.log(inTravelClass);
  
  // Seats Remaining
  var inSeatsRemain = data.results[0].itineraries[0].inbound.flights[0].booking_info.seats_remaining
  // console.log(inSeatsRemain);

  // Flight Arrival Info ***************************
  
  // Date and Time
  var inArriveDateTime = data.results[0].itineraries[0].inbound.flights[0].arrives_at
  // console.log(inArriveDateTime);
  
  // Airport
  var inArriveAirport = data.results[0].itineraries[0].inbound.flights[0].destination.airport
  // console.log(inArriveAirport);
  
  // Terminal
  var inArriveTerminal = data.results[0].itineraries[0].inbound.flights[0].destination.terminal
  // console.log(inArriveTerminal);


  // ********************************* ROUND TRIP FLIGHT FARES *******************************
  
  // Round Trip Price
  var rtPrice = data.results[0].fare.total_price
  // console.log(rtPrice)
  
  // Tax
  var rtTax = data.results[0].fare.price_per_adult.tax
  // console.log(rtTax)
  
  // var rtTotal = (Boolean(rtPrice) + Boolean(rtTax))
  // console.log(rtTotal)
  
  // Refundable
  var rtRefund = data.results[0].fare.restrictions.refundable
  // console.log(rtRefund)

});
				  

