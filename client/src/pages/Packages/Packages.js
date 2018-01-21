import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
// import Packages from "../..components/Packages";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


class Packages extends Component {
  state = {
    Packages: [],
  // update here if any form details that are needed to be empty.
  };


render() {
	return (
		<section className="row columns">
	    <div className="hero-section">
	      <div className="hero-section-text">
	        <h1>Packages</h1>
	        <h5>Check out some of our packages. These are perfect for people who want to get away but don't want the hassle of planning.</h5>
	      </div>
	      <div className="translucent-form-overlay">
	        <form>
	          <div className="row columns"></div>
	          <div className="floated-label-wrapper">
	            <label for="takeoff">Start Airport</label>
	            <input type="text" id="takeoff" name="takeoff input" placeholder="Departure Airport" /> 
	          </div>
	          <div className="floated-label-wrapper">
	            <label for="destination">Destination</label>
	            <input type="text" id="destination" name="destination input" placeholder="Destination" />
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
    </section>
	);
};

}

export default Packages;