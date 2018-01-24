import axios from "axios";
import keys from '../pages/Auth/dev';

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
  // Gets all users
  getUser: function() {
    return axios.get("/api/user");
  },
  // Get user travel history
  getTripHistory: function() {
    return axios.get("/api/user/travelhistory");
  }

};
