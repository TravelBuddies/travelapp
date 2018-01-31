import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import $ from 'jquery';
import 'foundation-sites';

// import Nav from "../../components/Nav";
// import Hero from "../../components/Hero";
// import Packages from "../..components/Packages";
// import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";

import moment from "moment";


class Packages extends Component {
  state = {
	packages: [],
	  origin: "",
	  dest: "",
	  travClass: "",
	  depart: "",
	  returns: ""
  // update here if any form details that are needed to be empty.
  };
	componentDidMount() {
		$(document).foundation();
		this.loadFlights();
	};

	// Loading the city and flight details along with lowest possible prices.
	loadFlights = () => {
		// API.getFlights()
		//   .then(res =>
		//     this.setState({ flights: res.data })
		//   )
		//   .catch(err => console.log(err));
		console.log(this.state.flights)
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		var params = {
			origin: this.state.origin,
			dest: this.state.destination,
			depart: moment(this.state.startDate).format('YYYY-MM-DD'),
			returns: moment(this.state.endDate).format('YYYY-MM-DD'),
			travClass: "Economy"//this.state.travClass
		}

		// if (this.state.origin && this.state.destination && this.state.departure_date && this.state.return_date) {
		API.getFlights(params)
			.then(res => this.setState({ flights: res.data }))
			.catch(err => console.log(err));
		// }
		//  
	};

render() {
	console.log(this.state.packages);
	return (
		<Container fluid>
			<Row>
				<Col size="md-12">
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
									<FormBtn
										disabled={!(this.state.startDate && this.state.endDate && this.state.origin && this.state.destination)}
										onClick={this.handleFormSubmit}>
										Search
                                    </FormBtn>
								</form>
							</div>
						</div>
					</section>
				</Col>
			</Row>
		</Container>			
		);
	};

}; // closing class component

export default Packages;