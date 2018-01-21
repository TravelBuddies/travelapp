import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
// import Flights from "../..components/Flights";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


class Flights extends Component {
  state = {
  	flights: [],
    origin: "",
    destination: "",
    travel_class: "",
    departure_date: "",
    return_date: ""
  };

  componentDidMount() {
    this.loadFlights();
  };

  loadFlights = () => {
    API.getFlights()
      .then(res =>
        this.setState({ flights: res.data })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.origin && this.state.destination && this.state.departure_date && this.state.return_date) {
      API.getFlights({
        origin: this.state.origin,
        destination: this.state.destination,
        departure_date: this.state.startDate,
        return_date: this.state.endDate
      })
        .then(res => this.loadFlights())
        .catch(err => console.log(err));
    }
  };


render() {
	return (
		<section className="row columns">
	    <div className="hero-section">
	      <div className="hero-section-text">
	        <h1>Flights</h1>
	        <h5>Where would you like to go?</h5>
	      </div>
	      <div className="translucent-form-overlay">
	        <form>
	          <div className="row columns"></div>
	          <div className="floated-label-wrapper">	            
	            <Input 
	            	value={this.state.origin}
	            	onChange={this.handleInputChange} 
	            	id="takeoff" 
	            	name="origin" 
	            	placeholder="Departure Airport" 
	            />
	          </div>
	          <div className="floated-label-wrapper">
	            <Input 
	            	value={this.state.destination}
	            	onChange={this.handleInputChange} 
	            	id="destination" 
	            	name="destination" 
	            	placeholder="Destination Airport" 
	            /> 
	          </div>
	          <div className="floated-label-wrapper">
	          <DateRangePicker
				  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
				  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
				  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
				  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
				  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
				  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
				/>
	          </div>
	          <div className="row columns">
	            <button type="button" className="primary button expanded search-button" id="logInButton">
	                Search
	            </button>

	          </div>
	     
	       </form>
	      </div>
	    </div>
	    {this.state.flights.length ? (
              <List>
                {this.state.flights.map(flight => (
                  <ListItem key={flight._id}>
                    <Link to={"/flights/" + flight._id}>
                      <strong>
                        {flight.title} by {flight.author}
                      </strong>
                    </Link>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
    </section>
	);
};

}

export default Flights;