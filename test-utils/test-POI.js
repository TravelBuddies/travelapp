var API = require("./test-API")

// converts the params.city "New York" into New%20York. This will keep the URL happy :)
var city = encodeURIComponent(city)

var params = {
		
		city: "New York"
}

API.getPOI(params)
 .then(function (body) {
	
	var data = JSON.parse(body)
	// console.log(data)

// ************************************** Points of Interest **********************************
  
	// City
	var poiCity = data.current_city.name
  console.log(poiCity);

//   // Title
	var poiTitle = data.points_of_interest[0].title
  console.log(poiTitle);

  // Categories
	var poiCategories = data.points_of_interest[0].categories
	// use a loop to run through all of the categories.
  for (var i = 0; i < poiCategories.length; i++) {
			poiCategories[i]
		console.log(poiCategories[i])
		}

	// Image
	var poiImage = data.points_of_interest[0].main_image
  console.log(poiImage);

  // Description
	var poiDescript = data.points_of_interest[0].details.description
  console.log(poiDescript);

  // Description
	var poiMapLink = data.points_of_interest[0].location.google_maps_link
  console.log(poiMapLink);

});