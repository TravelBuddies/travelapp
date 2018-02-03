import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import $ from 'jquery';
import 'foundation-sites';
import "./User.css";

import { List } from "../../components/List";
// import moment from "moment";
// import AutoCompForm from "../../components/AutoCompForm";

class User extends Component {
  state = {
    User: {},
    UserHistory:[]
  };

  componentDidMount() {
    $(document).foundation();
    this.loadUser();
    this.loadUserHistory()
  }
  // pass in the userId param when the user signs in or signs up
  loadUser = () => {
    API.getUserById("5a669cfdfbcce50ee4c0a8b2")
      .then(res =>
        this.setState({ 
          User: res.data }))

      .catch(err => console.log(err));
  };
  // pass in the userId param when the user signs in or signs up

  loadUserHistory = () => {
    API.getUserHistory("5a669cfdfbcce50ee4c0a8b2")
      .then(res =>
        this.setState({ 
          UserHistory: res.data }))
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
    if (this.state.username && this.state.firstName) {
     
      API.getUser()
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    }
  };

render() {
    return (
       <div id="user-body">
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <section className="row columns">
                        <div className="hero-section">
                        <div className="hero-section-text">
                            <h1>Welcome {this.state.User.username}</h1>
                            
                            <h3>Here are some trip suggestions to get you going on your next journey!</h3>
                        </div>
                              
                            <div className="sign-up-form" id="sign-up">
                                <form>
                                    <div className="row columns">
                                    
                                   
                                    <h1>Your Upcoming Journey</h1>
                                      <div className="floated-label-wrapper">             
                                          {this.state.UserHistory.length ? (
                                          <div> 
                                            
                                            <List>
                                            <h2>Booked Flight</h2>   
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                    <p>
                                                    To: 
                                                    
                                                    {result.flightDest}
                                                    </p>
                                                  
                                                  </div>)
                                                   })}

                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  From:
                                                  {result.flightOrg}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}

                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Date:
                                                  {result.flightDate}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Total Price: $
                                                  {result.flightPrice}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}

                                            </List>
                                            <List>
                                            <h2>Hotel Stay</h2>   
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                    <p>
                                                    Hotel Name: 
                                                    
                                                    {result.hotelName}
                                                    </p>
                                                  
                                                  </div>)
                                                   })}

                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Check-in Date:
                                                  {result.hotelCheckIn}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}

                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Check-out Date:
                                                  {result.hotelCheckOut}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Total Price: $
                                                  {result.hotelPrice}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}

                                            </List>
                                            <List>
                                            <h2>Car Rental</h2>   
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                    <p>
                                                    Location: 
                                                    
                                                    {result.carLocation}
                                                    </p>
                                                  
                                                  </div>)
                                                   })}

                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Company:
                                                  {result.carCompany}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}

                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Car Type:
                                                  {result.carType}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  Total Price: $
                                                  {result.carPrice}
                                                  </p>
                                                  
                                                  
                                                  </div>)
                                                   })}

                                            </List>
                                            <List>
                                             
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                    <p>
                                                    Grand Total: $ 
                                                    
                                                    {result.grandTotalPrice}
                                                    </p>
                                                  
                                                  </div>)
                                                   })}

                                                

                                            </List>
                                          </div>
                                          ) : ( <div>
                                          
                                                </div>
                                                )}
                                      </div>
                                    
                                    
                                    
                                    
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

export default User;
