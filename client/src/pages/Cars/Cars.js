import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { List, ListItem } from "../../components/List";
import moment from "moment";
import $ from 'jquery';
import 'foundation-sites';
import "./Cars.css"

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
  };


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
				<div className="hero-carsection">
					<div className="hero-section-text">
						<h1>Cars</h1>
						<h5>Need a car?</h5>
					</div>
					<div className="translucent-form-overlay-booking">
						<form>
							<div className="row columns"></div>
							<div className="floated-label-wrapper-booking">	            
								<Input 
									value={this.state.location}
									onChange={this.handleInputChange} 
									id="location" 
									name="location" 
									placeholder="City" 
								/>
							</div>
							<div className="floated-label-wrapper-booking">	            
								<Input 
									value={this.state.category}
									onChange={this.handleInputChange} 
									id="category" 
									name="category" 
									placeholder="Category" 
								/>
							</div>
							<div className="floated-label-wrapper-booking">	            
								<Input 
									value={this.state.type}
									onChange={this.handleInputChange} 
									id="type" 
									name="type" 
									placeholder="Type(Sedan, Coupe)" 
								/>
							</div>
							<div className="floated-label-wrapper-booking">
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
									 
											<li>
												<div className="travel-feature-card">
				                                	<div className="travel-feature-card-header">
					                                	<div className="row">
					                                   		<div className="medium-12 columns">
					                                     		<h5 className="travel-feature-card-subtitle">{result.provider.company_name}</h5>
					                                      	<div className="travel-feature-card-header-address">
					                                        <h5>{result.address.line1} | {result.address.city} </h5>
					                                     </div>
					                                  </div>
					                                </div>  
												</div>
					                          </div>

												{result.cars.map((car, index) => { 
												    return(
													    <ListItem key={index}>
													    	<div class="all-car-info">
													    	<img src={ car.images["0"].url } alt="car" />

													    	<div class="car-info">
																	<h5>VEHICLE INFO: </h5>
																	<br></br>
																	<p>Category: { car.vehicle_info.category } </p>
																	<p>Transmission: { car.vehicle_info.transmission }</p>
																	<p>Type: { car.vehicle_info.type }</p> 
																	
																</div>

													    	<div class="daily-rates">
													    	
													    		{car.rates['0'].type} RATE:  ${car.rates['0'].price.amount}
													    	
															</div>
																<div class="car-total">
																	Estimated Total: ${car.estimated_total.amount}
																</div>
																
															</div>
														 </ListItem>
													
													)
												})}
											</li>
										
									
								]
							})};
						</List>
					) : (
							<div class="travel-feature-card">
								<div class="travel-feature-card-header">
									<div class="row">
											<div class="medium-12 columns">
												<h5 class="travel-feature-card-subtitle">Rental Company</h5>
												<div class="travel-feature-card-header-controls">
													
												</div>
										</div>
									</div>  
								</div>
								<div class="travel-feature-card-details">
									<div class="small-4 medium-2 columns travel-feature-card-image" >
											
											<h6>Rentals for your Trip</h6>
											
									</div>
										
								</div>
							</div>
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
