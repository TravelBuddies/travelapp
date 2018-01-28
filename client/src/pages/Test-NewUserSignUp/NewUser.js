import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';


import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";

class NewUser extends Component {
  state = {
    NewUser: []
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
    // date: new Date(Date.now())
  };

  componentDidMount() {
    this.loadUser();
    console.log(NewUser)
    // this.autoComp()
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.username && this.state.firstName && this.state.lastName && this.state.password
    // && this.state.address && this.state.city && this.state.state && this.state.zipcode 
    // && this.state.phoneNumber) {
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
    



    // Axios promise for getting the flight results 
      // API.getFlights(params)
      //     .then(res => this.setState({ flights: res.data }))
      //     .catch(err => console.log(err));
    // }
    //  
  // };

  render() {
    return (
      <div className="translucent-form-overlay">
        <form>
            <div className="row columns">
            
            </div>
            <br>
            </br>
            <br>
            </br>
            <h1>New User Test Input</h1>
            <div className="floated-label-wrapper">             
                <Input 
                    value={this.state.username}
                    onChange={this.handleInputChange} 
                    id="username" 
                    name="username" 
                    placeholder="User Name" 
                />
            </div>
            <div className="floated-label-wrapper">
                <Input 
                    value={this.state.firstName}
                    onChange={this.handleInputChange} 
                    id="firstName" 
                    name="firstName" 
                    placeholder="First Name" 
                /> 
            </div>
            <div className="floated-label-wrapper">             
                <Input 
                    value={this.state.lastName}
                    onChange={this.handleInputChange} 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Last Name" 
                />
            </div>
            <div className="floated-label-wrapper">
                <Input 
                    value={this.state.password}
                    onChange={this.handleInputChange} 
                    id="password" 
                    name="password" 
                    type="password" 
                /> 
            </div>
            <div className="floated-label-wrapper">             
                <Input 
                    value={this.state.address}
                    onChange={this.handleInputChange} 
                    id="address" 
                    name="address" 
                    placeholder="Address" 
                />
            </div>
            <div className="floated-label-wrapper">
                <Input 
                    value={this.state.city}
                    onChange={this.handleInputChange} 
                    id="city" 
                    name="city" 
                    placeholder="City" 
                /> 
            </div>
            <div className="floated-label-wrapper">             
                <Input 
                    value={this.state.state}
                    onChange={this.handleInputChange} 
                    id="state" 
                    name="state" 
                    placeholder="State" 
                />
            </div>
            <div className="floated-label-wrapper">
                <Input 
                    value={this.state.zipcode}
                    onChange={this.handleInputChange} 
                    id="zipcode" 
                    name="zipcode" 
                    placeholder="Zipcode" 
                /> 
            </div>
            <div className="floated-label-wrapper">             
                <Input 
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange} 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                />
            </div>
            <div className="floated-label-wrapper">
                <Input 
                    value={this.state.paymentMethod}
                    onChange={this.handleInputChange} 
                    id="paymentMethod" 
                    name="paymentMethod" 
                    placeholder="Payment Method" 
                /> 
            </div>
            
            <div> </div>
            <FormBtn
                disabled={!(this.state.username && this.state.firstName && this.state.lastName && this.state.password
    && this.state.address && this.state.city && this.state.state && this.state.zipcode 
    && this.state.phoneNumber)}
                onClick={this.handleFormSubmit}>
                Submit Into Database
            </FormBtn>
        </form>
      </div>
    );
  }
}

export default NewUser;