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
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <section className="row columns">
                            <div className="hero-section">
                                <div className="hero-section-text">
                                    <h1>Flights</h1>
                                    <h5>Where would you like to go?</h5>
                                </div>
                                <div className="translucent-form-overlay">
                                    <form>
                                        <div className="row columns">

                                        </div>
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
                                        <div> </div>
                                        <FormBtn
                                            disabled={!(this.state.startDate && this.state.origin && this.state.destination)} //&& this.state.endDate
                                            onClick={this.handleFormSubmit}>
                                            Search
                                    </FormBtn>
                                    </form>
                                </div>
                            </div >
                            <div>
                                {this.state.flights.length ? (
                                    <List>
                                        {this.state.flights.map(result => {
                                            return (
                                                result.itineraries.map(itinerary => {
                                                    return [

                                                        itinerary.outbound.flights.map((flyout, index) => {
                                                            return (
                                                                <List>
                                                                    <ListItem key={index} >
                                                                        <li>
                                                                            <h4><strong>OUTBOUND</strong> </h4>
                                                                            <h5>
                                                                                <strong> Origin : </strong> {flyout.origin.airport}
                                                                                <strong> Destination :</strong>  {flyout.destination.airport}
                                                                                <strong> Airlines :</strong>  {flyout.marketing_airline}
                                                                                <strong> through :</strong>  {flyout.operating_airline}
                                                                                <strong> Flight No :</strong> {flyout.flight_number}
                                                                                <strong> Departure Time :</strong> {flyout.departs_at}
                                                                                <strong> Arrival Time :</strong>  {flyout.arrives_at}
                                                                            </h5>

                                                                        </li>
                                                                    </ListItem>
                                                                </List>
                                                            ) // outbound return end
                                                        }),
                                                        itinerary.inbound.flights.map((flyin, index) => {
                                                            return (
                                                                <List>
                                                                    <ListItem key={index} >
                                                                        <li>
                                                                            <h4><strong>INBOUND</strong> </h4>
                                                                            <h5>
                                                                                <strong> Origin : </strong> {flyin.origin.airport}
                                                                                <strong> Destination :</strong>  {flyin.destination.airport}
                                                                                <strong> Airlines :</strong>  {flyin.marketing_airline}
                                                                                <strong> through :</strong>  {flyin.operating_airline}
                                                                                <strong> Flight No :</strong> {flyin.flight_number}
                                                                                <strong> Departure Time :</strong> {flyin.departs_at}
                                                                                <strong> Arrival Time :</strong>  {flyin.arrives_at}
                                                                            </h5>
                                                                        </li>
                                                                    </ListItem>
                                                                </List>
                                                            ) //inbound return end
                                                        })
                                                    ]; // Array of Itinerary objects Inbound and Outbound.

                                                })
                                            );
                                        })}
                                    </List>
                                ) : (
                                        <h3>Query the Flights</h3>
                                    )}
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        );
    };
}; //closing class component.

export default Flights;