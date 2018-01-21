import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
// import Hotels from "../..components/Hotels";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


class Hotels extends Component {
  state = {
  	hotels: [],
  	location: "",
    check_in: "",
    check_out: ""
  };

  componentDidMount() {
    this.loadHotels();
  };

  loadHotels = () => {
    API.getHotels()
      .then(res =>
        this.setState({ hotels: res.data })
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
    if (this.state.location && this.state.check_in && this.state.check_out) {
      API.getFlights({
        location: this.state.location,
        check_in: this.state.startDate,
        check_out: this.state.endDate
      })
        .then(res => this.loadHotels())
        .catch(err => console.log(err));
    }
  };


render() {
	return (
		<section className="row columns">
	    <div className="hero-section">
	      <div className="hero-section-text">
	        <h1>Hotels</h1>
	        <h5>Need a Place to Stay?</h5>
	      </div>
	      <div className="translucent-form-overlay">
	        <form>
	          <div className="row columns"></div>
	          <div className="floated-label-wrapper">	            
	            <Input 
	            	value={this.state.location}
	            	onChange={this.handleInputChange} 
	            	id="hotel" 
	            	name="location" 
	            	placeholder="City" 
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
    </section>
	);
};

}

export default Hotels;