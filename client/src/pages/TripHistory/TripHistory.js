import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
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
    // username: "",
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
      //   User: res.data, 
      //     username: this.state.username,
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
            
              <h1>Your Trip History</h1>
            
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="title"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Address (required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Phone Number (Optional)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit username
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
              <h1>User Info!!!</h1>
            {console.log(this.state.User)}

            {this.state.User.length ? (
              <List>
                {this.state.User.map(User => (
                  <ListItem key={User._id}>
                    <Link to={"/user"}>
                      <strong>
                        {User.username}
                      </strong>
                    </Link>
                   
                  </ListItem>
                 ))}
              </List>
            ) : (
              <h3>{this.state.User}</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
