import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
    import $ from 'jquery';
import 'foundation-sites';
import "./User.css";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
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
    // this.autoComp()
  }

  loadUser = () => {
    API.getUserById("5a72a59ad7106e08775c4d0f")
      .then(res =>
        this.setState({ 
          User: res.data }))

      .catch(err => console.log(err));
  };

  loadUserHistory = () => {
    API.getUserHistory("5a72a59ad7106e08775c4d0f")
      .then(res =>
        this.setState({ 
          UserHistory: res.data }))
       //console.log(res))
      .catch(err => console.log(err));
  };
  


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
                                    
                                   
                                    <h1>Your Travel History</h1>
                                      <div className="floated-label-wrapper">             
                                          {this.state.UserHistory.length ? (
                                          <div>    
                                            
                                            <List>
                                                {this.state.UserHistory.map(result => {
                                                  return (
                                                  <div>
                                                  <p>
                                                  flight Number:
                                                  {result.fightNumber}
                                                  </p>
                                                  </div>)
                                                   })}
                                            </List>
                                          </div>
                                          ) : ( <div>
                                          somthing
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
                          
                        
      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
            
            
          
      //     </Col>
      //     <Col size="md-6 sm-12">
      //       <br>
      //       </br>
      //         <h1>Hello User</h1>
      //                       <div className="translucent-form-overlay">
      //                           <form>
      //                               <div className="row columns">
                                    
      //                               </div>
      //                               <div className="floated-label-wrapper">             
      //                                   <Input 
      //                                       value={this.state.origin}
      //                                       onChange={this.handleInputChange} 
      //                                       id="takeoff" 
      //                                       name="origin" 
      //                                       placeholder="Departure Airport" 
      //                                   />
      //                               </div>
      //                               <div className="floated-label-wrapper">
      //                                   <Input 
      //                                       value={this.state.destination}
      //                                       onChange={this.handleInputChange} 
      //                                       id="destination" 
      //                                       name="destination" 
      //                                       placeholder="Destination Airport" 
      //                                   /> 
      //                               </div>
      //                               <div className="floated-label-wrapper">
      //                                   <DateRangePicker
      //                                       startDate={this.state.startDate} // momentPropTypes.momentObj or null,
      //                                       startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      //                                       endDate={this.state.endDate} // momentPropTypes.momentObj or null,
      //                                       endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      //                                       onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
      //                                       focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      //                                       onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      //                                   />
      //                               </div>
      //                               <div> </div>
      //                               <FormBtn
      //                                   disabled={!(this.state.startDate && this.state.endDate && this.state.origin && this.state.destination)}
      //                                   onClick={this.handleFormSubmit}>
      //                                   Search
      //                               </FormBtn>
      //                           </form>
      //                       </div>

                            
            
      //         <h4>Here's Your Info!!!</h4>
      //       {console.log(this.state.User)}

      //       {this.state.User.length ? (
      //         <List>
      //           {this.state.User.map(User => (
      //             <ListItem key={User._id}>
      //               <Link to={"/user"}>
      //                 <strong>
      //                   <ul>
      //                     <li>User Name --  
      //                       <span> {User.username}</span>
      //                     </li>
      //                     <li>First Name -- 
      //                       <span> {User.firstName}</span>
      //                     </li>
      //                     <li>Last Name --
      //                       <span> {User.lastName}</span>
      //                     </li>
      //                     <li>Street --
      //                       <span> {User.address}</span>
      //                     </li>
      //                     <li>City --
      //                       <span> {User.city}</span>
      //                     </li>
      //                     <li>State --
      //                       <span> {User.state}</span>
      //                     </li>
      //                     <li>Zipcode --
      //                       <span> {User.zipcode}</span>
      //                     </li>
      //                     <li>Phone Number --
      //                       <span> {User.phoneNumber}</span>
      //                     </li>
      //                     <li>Payment Method --
      //                       <span> {User.paymentMethod}</span>
      //                     </li>
      //                     <li>User Profile Created --
      //                       <span> {User.userCreated}</span>
      //                     </li>
      //                     <li>User ID --
      //                       <span> {User._id}</span>
      //                     </li>
      //                   </ul>
      //                 </strong>
      //               </Link>
                   
      //             </ListItem>

      //            ))}
      //         </List>
      //       ) : (
      //         <h3>{this.state.User}</h3>
      //       )}
      //     </Col>
      //   </Row>
      // </Container>
                        
                          

                        
