import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


class Cars extends Component {
  state = {
  	cars: [],
    location: "",
    category: "",
    type: "",
    startDate: "",
    endDate: ""
  };

  componentDidMount() {
    this.loadCarRentals();
  };

  loadCarRentals = () => {
    API.getCars()
      .then(res =>
        this.setState({ cars: res.data })
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
    if (this.state.location && this.state.category && this.state.type && this.state.startDate && this.state.endDate) {
      API.getCars({
        location: this.state.location,
        category: this.state.category,
        type: this.state.type,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
        .then(res => this.loadCarRentals())
        .catch(err => console.log(err));
    }
  };


render() {
	return (
		<section className="row columns">
	    <div className="hero-section">
	      <div className="hero-section-text">
	        <h1>Cars</h1>
	        <h5>Need a car?</h5>
	      </div>
	      <div className="translucent-form-overlay">
	        <form>
	          <div className="row columns"></div>
	          <div className="floated-label-wrapper">	            
	            <Input 
	            	value={this.state.location}
	            	onChange={this.handleInputChange} 
	            	id="location" 
	            	name="location" 
	            	placeholder="City" 
	            />
	          </div>
	          <div className="floated-label-wrapper">	            
	            <Input 
	            	value={this.state.category}
	            	onChange={this.handleInputChange} 
	            	id="category" 
	            	name="category" 
	            	placeholder="Category" 
	            />
	          </div>
	          <div className="floated-label-wrapper">	            
	            <Input 
	            	value={this.state.type}
	            	onChange={this.handleInputChange} 
	            	id="type" 
	            	name="type" 
	            	placeholder="Type (Sedan, Coupe, SUV)" 
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

export default Cars;