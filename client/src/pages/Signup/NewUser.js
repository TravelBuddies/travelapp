import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import $ from 'jquery';
import 'foundation-sites';
import "./signup.css";
import Hero from "../../components/Hero";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';


import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";

class NewUser extends Component {

  state = {
    NewUser: [],
    currentPage: "signup"
  };

  componentDidMount() {
    this.loadUser();
    $(document).foundation();
    console.log(NewUser)
    // this.autoComp()
  }

  loadUser = (res) => {
    API.getUser()
      .then(res =>
        this.setState({ 
          User: res.data }))
}
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveUser({
        
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        phoneNumber: this.state.phoneNumber
      })
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    }

handlePageChange = page => {
    this.setState({ currentPage: page });
  };
    

  render() {
    return (
    <div id="signup-body">
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <section className="row columns">
                        <div className="hero-section">
                        <div className="hero-section-text">
                            <h1>Join Us</h1>
                            <h3>And explore the endless possibilities your next journey has to offer.</h3>
                        </div>
                            <div className="sign-up-form" id="sign-up">
                                <form>
                                    <div className="row columns">
                                    
                                   
                                    <h1>Create Account</h1>
                                    <div className="floated-label-wrapper">             
                                        <Input 
                                            value={this.state.username}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="username" 
                                            placeholder="User Name" 
                                        />
                                    </div>
                                    <div className="floated-label-wrapper">
                                        <Input 
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="firstName" 
                                            placeholder="First Name" 
                                        /> 
                                    </div>
                                    <div className="floated-label-wrapper">             
                                        <Input 
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="lastName" 
                                            placeholder="Last Name" 
                                        />
                                    </div>
                                    <div className="password-wrapper">
                                        <Input 
                                            value={this.state.password}
                                            onChange={this.handleInputChange} 
                                            id="pass" 
                                            name="password" 
                                            type="password" 
                                            placeholder="Password"
                                        /> 
                                    </div>
                                    <div className="floated-label-wrapper">             
                                        <Input 
                                            value={this.state.address}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="address" 
                                            placeholder="Address" 
                                        />
                                    </div>
                                    <div className="floated-label-wrapper">
                                        <Input 
                                            value={this.state.city}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="city" 
                                            placeholder="City" 
                                        /> 
                                    </div>
                                    <div className="floated-label-wrapper">             
                                        <Input 
                                            value={this.state.state}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="state" 
                                            placeholder="State" 
                                        />
                                    </div>
                                    <div className="floated-label-wrapper">
                                        <Input 
                                            value={this.state.zipcode}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="zipcode" 
                                            placeholder="Zipcode" 
                                        /> 
                                    </div>
                                    <div className="floated-label-wrapper">             
                                        <Input 
                                            value={this.state.phoneNumber}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="phoneNumber" 
                                            placeholder="Phone Number" 
                                        />
                                    </div>
                                    <div className="floated-label-wrapper">
                                        <Input 
                                            value={this.state.paymentMethod}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="paymentMethod" 
                                            placeholder="Payment Method" 
                                        /> 
                                    </div>
                                    
                                    
                                    <FormBtn
                                        disabled={!(this.state.username && this.state.firstName && this.state.lastName && this.state.password
                            && this.state.address && this.state.city && this.state.state && this.state.zipcode 
                            && this.state.phoneNumber)}
                                        onClick={this.handleFormSubmit}>
                                        Submit
                                    </FormBtn>
                                    </div>
                                </form>
                              
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>            
      </div>  

    
    );
  }
}

export default NewUser;

