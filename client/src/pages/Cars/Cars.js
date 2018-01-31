import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
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
				.then(res => this.setState({ cars: res.data.results }))
        .catch(err => console.log(err));
  };


render() {
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
				<div>
					{this.state.cars.length ? (
						<List>
							{this.state.cars.map((result, index) => {
								return [
									<List> 
										<ListItem> 
											<li>
												<h4>
													<strong> Address </strong>
													<h6>City :  { result.address.city }
														Country :  { result.address.city }
														Street :  { result.address.line1 }
														Region :  { result.address.region }
													</h6>
													<h5>
														Company Code: { result.provider.company_code }
														Company Name: { result.provider.company_name }
													</h5>
												</h4>,
												{result.cars.map((car, index) => { 
												    return(
													
													<List>
													    <ListItem key={index}>
															
															<li>
																<h5>
																	<span>Rate: { car.rates["0"].price.amount }</span>
																	<span>Rate Type: { car.rates["0"].type }</span>
																	<span>Estimated Total: {car.estimated_total.amount} </span>
																</h5>
																<img src={ car.images["0"].url } alt="" /> 
																VEHICLE INFO:
																<h6>Category: { car.vehicle_info.category } 
																Transmission: { car.vehicle_info.transmission } 
																Type: { car.vehicle_info.type } 
																acriss_code: { car.vehicle_info.acriss_code} </h6>
															</li>
														 </ListItem>
													</List>
													)
												})}
											</li>
										</ListItem>
									</List>
									
								]
							})};
						</List>
					) : (
							<h3>Query the Cars</h3>
						)}
				</div> 
			</section>
		</Col>
	</Row>
</Container>				 
		);
	};
}; // closing class component.

export default Cars;
