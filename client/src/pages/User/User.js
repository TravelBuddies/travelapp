import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
    import $ from 'jquery';
import 'foundation-sites';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
// import moment from "moment";
// import AutoCompForm from "../../components/AutoCompForm";

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
    (document).foundation();
    this.loadUser();
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
  

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    // API.gitAutoComp()
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

                            
            
              <h4>Here's Your Info!!!</h4>
            {console.log(this.state.User)}

            {this.state.User.length ? (
              <List>
                {this.state.User.map(User => (
                  <ListItem key={User._id}>
                    <Link to={"/user"}>
                      <strong>
                        <ul>
                          <li>User Name --  
                            <span> {User.username}</span>
                          </li>
                          <li>First Name -- 
                            <span> {User.firstName}</span>
                          </li>
                          <li>Last Name --
                            <span> {User.lastName}</span>
                          </li>
                          <li>Street --
                            <span> {User.address}</span>
                          </li>
                          <li>City --
                            <span> {User.city}</span>
                          </li>
                          <li>State --
                            <span> {User.state}</span>
                          </li>
                          <li>Zipcode --
                            <span> {User.zipcode}</span>
                          </li>
                          <li>Phone Number --
                            <span> {User.phoneNumber}</span>
                          </li>
                          <li>Payment Method --
                            <span> {User.paymentMethod}</span>
                          </li>
                          <li>User Profile Created --
                            <span> {User.userCreated}</span>
                          </li>
                          <li>User ID --
                            <span> {User._id}</span>
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
                          
                        
                        
                          

                        
