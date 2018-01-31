import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import $ from 'jquery';

import 'foundation-sites';

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { List, ListItem } from "../../components/List";

import moment from "moment";


class Hotels extends Component {
  state = {
  	hotels: [],
  	location: "",
    check_in: "",
    check_out: ""
  };

  componentDidMount() {
  	$(document).foundation();
  	
    // this.loadHotels();
  };

  // loadHotels = () => {
  //   API.getHotels()
  //     .then(res =>
  //       this.setState({ hotels: res.data })
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
		<Container fluid>
			<Row>
				<Col size="md-12">
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
											<List>
												<ListItem>
													<li>
														<h3>{ result.property_name } </h3>
														<h4>
															<strong> Address </strong>
															<h6>City :  { result.address.city }
																Street :  { result.address.line1 }
																Postal Code : { result.address.postal_code }
																Region :  { result.address.region }
																Country :  { result.address.city }
															</h6>
															<h5>
																Daily Rate $ :  { result.min_daily_rate.amount }
																Total Price $ : { result.total_price.currency}{ result.total_price.amount }
															</h5>
														</h4> 
														<h5>Amenities: </h5>,
												{result.amenities.map((amenity, index) => {
															return (
																<List>
																	<ListItem key={index}>
																		<li>
																			<h6>
																				{/* <span>{ amenity.amenity }</span> */}
																				<span>{ amenity.description } </span>
																			</h6>
																			
																		</li>
																	</ListItem>
																</List>
															)
														})},
														{result.contacts.map((contact, index) => {
															return (
																<List>
																	<ListItem key={index}>
																		<li>
																			<h5>
																				<span>Contact: { contact.type }</span>
																				<span>Detail: { contact.detail }</span>
																			</h5>
																		</li>
																	</ListItem>
																</List>
															)
														})},
														{result.rooms.map((room, index) => {
															return (
																<List>
																	<ListItem key={index}>
																		<li>
																			<h5>
																				<span>Start Date : {room.rates["0"].start_date}</span>
																				<span>End Date : {room.rates["0"].end_date}</span>
																				<span>Price $ : {room.rates["0"].price}</span>
																			</h5>
																			<h5>
																				<h6><span>Booking Code: { room.booking_code }</span></h6>
																				<h6><span>Rate Plan Code: { room.rate_plan_code }</span></h6>
																				<h6><span>Rate Type Code: { room.rate_type_code }</span></h6>
																				<h6><span>Room Type Code: { room.room_type_code }</span></h6>
																				<h6><span>Room Info</span></h6>
																				<h6><span>Bed Type: { room.room_type_info.bed_type }</span></h6>
																				<h6><span>Number of Beds: { room.room_type_info.number_of_beds }</span></h6>
																				<h6><span>Room Type: { room.room_type_info.room_type }</span></h6>
																			</h5>
																			<h5>
																				<h6><span>{ room.descriptions["0"] } </span></h6>
																				<h6><span>{ room.descriptions["1"] } </span></h6>
																				<h6><span>{ room.descriptions["2"] } </span></h6>
																			</h5>	
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
									<h3>Query the Hotels</h3>
								)}
						</div>	
					</section>
				</Col>
			</Row>
		</Container>			
	);
};

}

export default Hotels;