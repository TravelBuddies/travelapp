import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Link } from "react-router-dom";
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
    
    var params = {
        origin: this.state.origin,
        dest: this.state.destination,
        depart: moment(this.state.startDate).format('YYYY-MM-DD'),
        returns: moment(this.state.endDate).format('YYYY-MM-DD'),
        travClass: "Economy"//this.state.travClass
    }


    // Axios promise for getting the flight results 
      API.getFlights(params)
          .then(res => this.setState({ flights: res.data }))
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
                                        disabled={!(this.state.startDate && this.state.endDate && this.state.origin && this.state.destination)}
                                        onClick={this.handleFormSubmit}>
                                        Search
                                    </FormBtn>
                                </form>
                            </div>
                        </div>
                        {this.state.flights.length ? (
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
                            )}
                    </section>
                </Col>
            </Row>
        </Container>
	    );
    };
}; //closing class component.

export default Flights;
