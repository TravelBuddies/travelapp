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

API.getCar(params)
 .then(function (body) {
	
	var data = JSON.parse(body)
	// console.log(data)

// ********************************** Rental Cars **************************

	// Company
	var carCompany = data.results[0].provider.company_name
  console.log(carCompany);

  // Car Location
	var carLocation = data.results[0].address.line1
  console.log(carLocation);

  // Car Transmission
	var carsTrans = data.results[0].cars[0].vehicle_info.transmission
  console.log(carsTrans);

  // Car Fuel
	var carFuel = data.results[0].cars[0].vehicle_info.fuel
  console.log(carFuel);

  // Car Air Conditioning (true or false)
	var carAirCon = data.results[0].cars[0].vehicle_info.air_conditioning
  console.log(carAirCon);

  // Car Category
	var carCategory = data.results[0].cars[0].vehicle_info.category
  console.log(carCategory);

  // Car Type
	var carType = data.results[0].cars[0].vehicle_info.type
  console.log(carType);

  // Image
  // not very reliable
	var carImage = data.results[0].cars[0].images[0].url
  console.log(carImage);
  
  // Car Rates ***************************************

  // Priced Type
	var carPricedType = data.results[0].cars[0].rates[0].type
  console.log(carPricedType);

  // Price of Price Type
	var carPrice = data.results[0].cars[0].rates[0].price.amount
  console.log(carPrice);

  // Estimated Total Price
	var carTotalPrice = data.results[0].cars[0].estimated_total.amount
  console.log(carTotalPrice);

  // Currency
	var carCurrency = data.results[0].cars[0].rates[0].price.currency
  console.log(carCurrency);



})