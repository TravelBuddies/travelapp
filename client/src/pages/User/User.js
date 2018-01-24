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

class User extends Component {
  state = {
    User: []
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
    this.loadUser();
  }

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ 
          User: res.data }))

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
      API.getUser()
        .then(res => this.loadUser())
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
            {console.log(this.state.User)}

            {this.state.User.length ? (
              <List>
                {this.state.User.map(User => (
                  <ListItem key={User._id}>
                    <Link to={"/user"}>
                      <strong>
                        <ul>
                          <li>User Name_  
                            {User.username}
                          </li>
                          <li>First Name_ 
                            {User.firstName}
                          </li>
                          <li>Last Name_
                            {User.lastName}
                          </li>
                          <li>Street_
                            {User.address}
                          </li>
                          <li>City_
                            {User.city}
                          </li>
                          <li>State_
                            {User.state}
                          </li>
                          <li>Zipcode_
                            {User.zipcode}
                          </li>
                          <li>Phone Number_
                            {User.phoneNumber}
                          </li>
                          <li>Payment Method_
                            {User.paymentMethod}
                          </li>
                          <li>User Profile Created_
                            {User.userCreated}
                          </li>
                          <li>User ID_
                            {User._id}
                          </li>
                        </ul>
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
                          
                        
                        
                          

                        
