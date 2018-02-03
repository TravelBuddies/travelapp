import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import $ from 'jquery';

import 'foundation-sites';

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { List } from "../../components/List";

import moment from "moment";
import "./Hotels.css";


class Hotels extends Component {
  state = {
  	hotels: [],
  	location: "",
    check_in: "",
    check_out: ""
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

		// parameters that are passed to get the Hotel results
		var params = {
			location: this.state.location,
			depart: moment(this.state.startDate).format('YYYY-MM-DD'),
			returns: moment(this.state.endDate).format('YYYY-MM-DD'),
		}
		
		// Axios promise for getting the Hotel results
		API.getHotels(params)
				.then(res => this.setState({ hotels: res.data.results }))
        .catch(err => console.log(err));
    // }

  };


render() {

	return (
		
		<section className="row columns">
			<div className="hero-hotelssection">
				<div className="hero-section-text">
					<h1>Hotels</h1>
					<h5>Need a Place to Stay?</h5>
				</div>
				<div className="translucent-form-overlay-booking">
					<form>
						<div className="row columns"></div>
						<div className="floated-label-wrapper-booking">	            
							<Input 
								value={this.state.location}
								onChange={this.handleInputChange} 
								id="hotel" 
								name="location" 
								placeholder="City" 
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
				{this.state.hotels.length ? (
					<List>
						{this.state.hotels.map((result, index) => {
							return [
								
										
								<div class="travel-feature-card">
									<div class="travel-feature-card-header">
										<div class="row">
												<div class="medium-12 columns">
													<h5 class="travel-feature-card-subtitle">{result.property_name}</h5>
											</div>
										</div>  
									</div>
									<div class="travel-feature-card-contact">
											<p>
												City : {result.address.city} | 
												Street : {result.address.line1} | 
												Postal Code : {result.address.postal_code} | 
												Country :  {result.address.country}
											</p>
												{result.contacts.map((contact, index) => {
													return (
														
															<div key={index}>
																
																	
															{ contact.type }
															{ contact.detail }
																	
																
															</div>
														
													)
												})}
											
										
									</div>
									<div class="travel-feature-card-details">
										<div class="small-12 medium-9 columns travel-feature-card-content">
											
											<h6 class="travel-feature-card-date-range">Daily Rate: ${result.min_daily_rate.amount} | Total: ${result.total_price.amount} ({result.total_price.currency})</h6> 
												<div class="small-12 medium-3 columns travel-feature-card-price">
											{result.rooms.map((room, index) => {
												return (
													
														<div key={index}>
																
																	<button>${room.rates["0"].price}/night</button>
																
															
																<h5>
																	<span><i class="fi-calendar"> </i>Check In : {room.rates["0"].start_date}</span> <br></br> 
																	<span><i class="fi-calendar"> </i> Check Out : {room.rates["0"].end_date}</span>
																	
																</h5>
																<p>
																	Booking Code: { room.booking_code } <br></br>
																	
																	Room Info: <br></br>
																	Bed Type: { room.room_type_info.bed_type }
																	Number of Beds: { room.room_type_info.number_of_beds }
																	Room Type: { room.room_type_info.room_type }
																</p>
																<p>
																	{ room.descriptions["0"] } |   
																	{ room.descriptions["1"] } |  
																	{ room.descriptions["2"] }
																</p>	
															
														</div>
													
												)
										})}
										</div>  
									</div>
													
									<div class="am-list">
												<h6 class="travel-feature-card-title">Amenities</h6>
										{result.amenities.map((amenity, index) =>{
											return (
												<div class="amenities" key={index}>
													<span> &#10004; {amenity.description}</span>
												</div>
											)
										})}  
									</div>			                                         
								</div>
							</div> 
													
								]
							})};
						</List>
							) : (
							<div class="travel-feature-card">
									<div class="travel-feature-card-header">
										<div class="row">
												<div class="medium-12 columns">
													<h5 class="travel-feature-card-subtitle">Holiday Inn Express</h5>
													<div class="travel-feature-card-header-controls">
														
													</div>
											</div>
										</div>  
									</div>
									<div class="travel-feature-card-details">
										
											<div class="small-12 medium-9 columns travel-feature-card-content">
												<p>
													City : Chicago | 
													Street : 2881 Touhy Ave | 
													Postal Code : 60007 | 
													Country :  USA
												</p>
													<h6 class="travel-feature-card-date-range">Rate information</h6> 
													<h6 class="travel-feature-card-title">Amenities</h6>
												</div>

												<div class="small-12 medium-3 columns travel-feature-card-price">
													<h6>$249</h6>
													
												</div>
												
										</div>
									</div>

								)}
						</div>	
					</section>
							
	);
};

}

export default Hotels;