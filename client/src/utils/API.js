import axios from "axios";
import keys from '../pages/Auth/config.js';

export default {
  
  getFlights: function (params) {
    var URL = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=' + keys.API_KEY + '&origin=' + params.origin + '&destination=' + params.dest + '&travel_class=' + params.travClass + '&departure_date=' + params.depart + '&return_date=' + params.returns;// + '&number_of_results=' + params.numResult;
    console.log(URL);
      return axios.get(URL);
  },
  
  getInspirationFlights: function(params) {
    var URL = 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=' + keys.API_KEY + '&departure_date=' + params.depart + '--' + params.returns + '&origin=' + params.origin;
      return axios.get(URL);    
  },
  
  getCars: function (params) {
    var URL = 'http://api.sandbox.amadeus.com/v1.2/cars/search-airport?location=' + params.location  + '&pick_up=' + params.depart + '&drop_off=' + params.returns + '&apikey=' + keys.API_KEY;
    console.log(URL)
      return axios.get(URL);
  },
  
  getHotels: function (params) {
    var URL = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=' + keys.API_KEY + '&location=' + params.location + '&check_in=' + params.depart + '&check_out=' + params.returns;
    console.log(URL)
      return axios.get(URL);
  },
  
  // Autocompletes flight page city input. The params.input is not set up yet.
  gitAutoComp: function (params) {
    var URL = 'https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=' + keys.API_KEY + '&term=' + params.input
    console.log(URL)
      return axios.get(URL);
  },
  
  // Gets all users
  getUser: function() {
      return axios.get("/api/user");
  },

  // Gets one user
  getUserById: function(id) {
      return axios.get("/api/user/" + id);
  },

  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/signup", userData);
  },

  // Get user travel history
  getUserHistory: function(userId) {
      return axios.get("/api/triphistory/" + userId);
  }
};
   

    
    

