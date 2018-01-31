import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import moment from "moment";
import $ from 'jquery';
import 'foundation-sites';

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
  	$(document).foundation();
    // this.loadCarRentals();
  };

  // loadCarRentals = () => {
  //   API.getCars()
  //     .then(res =>
  //       this.setState({ cars: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
		event.preventDefault();
		
		// parameters that are passed to get the Car results
		var params = {
			location: this.state.location,
			category: this.state.category,
			type: this.state.type,
			depart: moment(this.state.startDate).format('YYYY-MM-DD'),
			returns: moment(this.state.endDate).format('YYYY-MM-DD'),
		}
			// Axios promise for getting the car results 
      API.getCars(params)
				.then(res => this.setState({ cars: res.data }))
        .catch(err => console.log(err));
  };


render() {
	console.log(this.state.cars)

	return (
		<Container fluid>
			<Row>
				<Col size="md-12">
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
									<FormBtn
										disabled={!(this.state.startDate && this.state.endDate && this.state.location)}
										onClick={this.handleFormSubmit}>
										Search
									</FormBtn>
								</form>
								</div>
							</div>
						{/* {this.state.flights.length ? (
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
							)} */}
   					</section>
				</Col>
			</Row>
		</Container>				 
		);
	};
}; // closing class component.

export default Cars;