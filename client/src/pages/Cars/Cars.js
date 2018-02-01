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
									 
											<li>
											<div class="travel-feature-card">
				                                <div class="travel-feature-card-header">
					                                <div class="row">
					                                   <div class="medium-12 columns">
					                                     <h5 class="travel-feature-card-subtitle">{result.provider.company_name}</h5>
					                                      <div class="travel-feature-card-header-address">
					                                        <h5>{result.address.line1} | {result.address.city} </h5>
					                                     </div>
					                                  </div>
					                                </div>  
					                              </div>
					                              
					                          </div>
												{result.cars.map((car, index) => { 
												    return(
													
													
													    <ListItem key={index}>
															
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
	                                    <img src="https://iplegalforum.files.wordpress.com/2017/04/virgin-america-logo.jpg" />
	                                    <h6>Flght No</h6>
	                                </div>
	                                  <div class="small-12 medium-9 columns travel-feature-card-content">
	                                    <h6 class="travel-feature-card-date-range">Jan 31 - Feb 7</h6> 
	                                        <h6 class="travel-feature-card-title">Origin : Destination</h6>
	                                        <p>Deaprture Time : Arrival time</p>   
	                                  </div>

	                                  <div class="small-12 medium-3 columns travel-feature-card-price">
	                                    <h6>$249</h6>
	                                    
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
