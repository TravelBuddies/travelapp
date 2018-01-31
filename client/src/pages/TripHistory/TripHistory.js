import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

// import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

// import Nav from "../../components/Nav";
// import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
// import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";

class TripHistory extends Component {
  state = {
    TripHistory: []
    // TripHistoryname: "",
    // firstName: "",
    // lastName: "",
    // password: "",
    // address: '',
    // city: '',
    // state: '',
    // zipcode: '',
    // phoneNumber: '',
    // paymentMethod: '',
    // date: ""
  };

  componentDidMount() {
    this.loadTrips();
  }

  loadTrips = () => {
    API.getTripHistory()
      .then(res =>
        this.setState({ 
          TripHistory: res.data }))

  //         // username: "",
  //         // firstName: "",
  //         // lastName: "",
  //         // password: "",
  //         // address: '',
  //         // city: '',
  //         // state: '',
  //         // zipcode: '',
  //         // phoneNumber: '',
  //         // paymentMethod: '',
  //         // date: ""
      .catch(err => console.log(err));
  };
  

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
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
    if (this.state.username && this.state.firstName) {
      // API.createUser({
      //   TripHistory: res.data, 
      //     TripHistoryname: this.state.TripHistoryname,
      //     firstName: "",
      //     lastName: "",
      //     password: "",
      //     address: '',
      //     city: '',
      //     state: '',
      //     zipcode: '',
      //     phoneNumber: '',
      //     paymentMethod: '',
      //     date: ""
      // })
      API.getTripHistory()
        .then(res => this.loadTrips())
        .catch(err => console.log(err));
    }
  };
  render() {
  return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
            
          
          </Col>
          <Col size="md-6 sm-12">
            <br>
            </br>
              <h1>Hello User</h1>
            
              <h4>Here's Your Info!!!</h4>
            {console.log(this.state.TripHistory)}

            {this.state.TripHistory.length ? (
              <List>
                {this.state.TripHistory.map(TripHistory => (
                  <ListItem key={TripHistory._id}>
                    <Link to={"/user/travelhistory"}>
                      <strong>
                        <ul>
                          <li>TripHistory Name_  
                            {TripHistory.TripHistoryname}
                          </li>
                          <li>First Name_ 
                            {TripHistory.firstName}
                          </li>
                          <li>Last Name_
                            {TripHistory.lastName}
                          </li>
                          <li>Street_
                            {TripHistory.address}
                          </li>
                          <li>City_
                            {TripHistory.city}
                          </li>
                          <li>State_
                            {TripHistory.state}
                          </li>
                          <li>Zipcode_
                            {TripHistory.zipcode}
                          </li>
                          <li>Phone Number_
                            {TripHistory.phoneNumber}
                          </li>
                          <li>Payment Method_
                            {TripHistory.paymentMethod}
                          </li>
                          <li>TripHistory Profile Created_
                            {TripHistory.TripHistoryCreated}
                          </li>
                          <li>TripHistory ID_
                            {TripHistory._id}
                          </li>
                        </ul>
                      </strong>
                    </Link>
                   
                  </ListItem>
                 ))}
              </List>
            ) : (
              <h3>{this.state.TripHistory}</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}


export default TripHistory;
