import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import $ from 'jquery';
import 'foundation-sites';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import moment from "moment";
import "./Flights.css";


class Flights extends Component {
    state = {
        flights: [],
        origin: "",
        dest: "",
        travClass: "",
        depart: "",
        returns: ""
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

        // parameters that are passed to get the flight results
        var params = {
            origin: this.state.origin,
            dest: this.state.destination,
            depart: moment(this.state.startDate).format('YYYY-MM-DD'),
            returns: moment(this.state.endDate).format('YYYY-MM-DD'),
            travClass: "Economy"//this.state.travClass
        }
        console.log(params)

        // Axios promise for getting the flight results 
        API.getFlights(params)
            .then(res => this.setState({ flights: res.data.results }))
            .catch(err => console.log(err));
        // }
        //  
    };


    render() {
        console.log(this.state.flights)
        return (

                        <section className="row columns">
                            <div className="hero-section">
                                <div className="hero-section-text">
                                    <h1>Flights</h1>
                                    <h5>Where would you like to go?</h5>
                                </div>
                                <div className="translucent-form-overlay-booking">
                                    <form>
                                        
                                        <div className="floated-label-wrapper-booking">
                                            <Input
                                                value={this.state.origin}
                                                onChange={this.handleInputChange}
                                                id="takeoff"
                                                name="origin"
                                                placeholder="Departure Airport"
                                            />
                                        </div>
                                        <div className="floated-label-wrapper-booking">
                                            <Input
                                                value={this.state.destination}
                                                onChange={this.handleInputChange}
                                                id="destination"
                                                name="destination"
                                                placeholder="Destination Airport"
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
                                            disabled={!(this.state.startDate && this.state.origin && this.state.destination)} //&& this.state.endDate
                                            onClick={this.handleFormSubmit} className="bookingSearch">
                                            Search
                                        </FormBtn>
                                    </form>
                                </div>
                            </div>
                            <div>
                                {this.state.flights.length ? (
                                    <List>
                                        {this.state.flights.map(result => {
                                            return (
                                                result.itineraries.map(itinerary => {
                                                    return [

                                                        itinerary.outbound.flights.map((flyout, index) => {
                                                            return (
                                                                
                                                                    <div key={index} >
                                                                        <li>
                                                                            <div class="travel-feature-card">
                                                                              <div class="travel-feature-card-header">
                                                                                <div class="row">
                                                                                   <div class="medium-12 columns">
                                                                                     <h5 class="travel-feature-card-subtitle">Outbound Flight</h5>
                                                                                      <div class="travel-feature-card-header-controls">
                                                                                        
                                                                                     </div>
                                                                                  </div>
                                                                                </div>  
                                                                              </div>
                                                                              <div class="travel-feature-card-details">
                                                                                <div class="small-4 medium-2 columns travel-feature-card-image" >
                                                                                    <img src="https://iplegalforum.files.wordpress.com/2017/04/virgin-america-logo.jpg" />
                                                                                    <h6>Airline: {flyout.marketing_airline}</h6>
                                                                                    <h6>{flyout.flight_number}</h6>
                                                                                </div>
                                                                                  <div class="small-12 medium-9 columns travel-feature-card-content">
                                                                                    <h6 class="travel-feature-card-date-range">Jan 31 - Feb 7</h6> 
                                                                                        <h6 class="travel-feature-card-title">{flyout.origin.airport} <i class="fi-arrow-right"></i> {flyout.destination.airport}</h6>
                                                                                        <p>{flyout.departs_at} : {flyout.arrives_at}</p>   
                                                                                  </div>

                                                                                  <div class="small-12 medium-3 columns travel-feature-card-price">
                                                                                    
                                                                                    <h6>$249</h6>
                                                                                    
                                                                                  </div>
                                                                                 
                                                                              </div>
                                                                            </div>

                                                                        </li>
                                                                    </div>
                                                                
                                                            ) // outbound return end
                                                        }),
                                                        itinerary.inbound.flights.map((flyin, index) => {
                                                            return (
                                                                
                                                                    <div key={index} >
                                                                        <li>
                                                                            <div class="travel-feature-card">
                                                                              <div class="travel-feature-card-header">
                                                                                <div class="row">
                                                                                   <div class="medium-12 columns">
                                                                                     <h5 class="travel-feature-card-subtitle">Return Flight</h5>
                                                                                     <i class="fa fa-plane"></i>
                                                                                      <div class="travel-feature-card-header-controls">
                                                                                        
                                                                                     </div>
                                                                                  </div>
                                                                                </div>  
                                                                              </div>
                                                                              <div class="travel-feature-card-details">
                                                                                <div class="small-4 medium-2 columns travel-feature-card-image" >
                                                                                    <img src="https://iplegalforum.files.wordpress.com/2017/04/virgin-america-logo.jpg" />
                                                                                    <h6>Airline: {flyin.marketing_airline}</h6>
                                                                                    <h6>{flyin.flight_number}</h6>
                                                                                </div>
                                                                                  <div class="small-12 medium-9 columns travel-feature-card-content">
                                                                                    <h6 class="travel-feature-card-date-range">Jan 31 - Feb 7</h6> 
                                                                                        <h6 class="travel-feature-card-title">{flyin.origin.airport} <i class="fi-arrow-right"></i> {flyin.destination.airport}</h6>
                                                                                        <p>{flyin.departs_at} : {flyin.arrives_at}</p>   
                                                                                  </div>

                                                                                  <div class="small-12 medium-3 columns travel-feature-card-price">
                                                                                    <h6>$249</h6>
                                                                                    
                                                                                  </div>
                                                                                 
                                                                              </div>
                                                                            </div>

                                                                        </li>
                                                                    </div>
                                                                
                                                            ) //inbound return end
                                                        })
                                                    ]; // Array of Itinerary objects Inbound and Outbound.

                                                })
                                            );
                                        })}
                                    </List>
                                ) : (
                                        <div class="travel-feature-card">
                                          <div class="travel-feature-card-header">
                                            <div class="row">
                                               <div class="medium-12 columns">
                                                 <h5 class="travel-feature-card-subtitle">Outbound Flight</h5>
                                                  <div class="travel-feature-card-header-controls">
                                                    
                                                 </div>
                                              </div>
                                            </div>  
                                          </div>
                                          <div class="travel-feature-card-details">
                                            <div class="small-4 medium-2 columns travel-feature-card-image" >
                                                <img src="https://iplegalforum.files.wordpress.com/2017/04/virgin-america-logo.jpg" alt= " " />
                                                <h6>Flght No</h6>
                                            </div>
                                              <div class="small-12 medium-9 columns travel-feature-card-content">
                                                <h6 class="travel-feature-card-date-range">Jan 31 - Feb 7</h6> 
                                                    <h6 class="travel-feature-card-title">Origin <i class="fi-arrow-right"></i> Destination</h6>
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

        );
    };
}; //closing class component.

export default Flights;