
import React, { Component } from 'react'
import API from '../../utils/API'
import AuthInterface from '../../utils/AuthInterface'
import { Redirect } from 'react-router-dom'
import { Col, Row, Container } from '../../components/Grid'
import { Input, FormBtn } from '../../components/Form'
import ErrorDisplay from '../../components/ErrorDisplay'
import $ from 'jquery';
import 'foundation-sites';
import './Login.css'

// import Hero from "../../components/Hero";
import Trending from "../../components/Trending";
import Contact from "../../components/Contact";
import Testimony from "../../components/Testimony";

// import './Login.css'

class Login extends Component {

  state = {
    username: '',
    password: '',
    newUser: false,
    loggedIn: false
  }

  componentDidMount() {
    $(document).foundation();
    API.checkForSession()
      .then( res => {
        const { user } = res.data
        
        if ( user ) {
          AuthInterface.login( user )
          this.setState({ loggedIn: true })
        }
      })
      .catch(() => {})

  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const { username, password } = this.state
    console.log(this.state)

    if ( !(username && password) ) return

    // const authMethod = NewUser ? 'signup' : 'login'
    const credentials = { username, password }
    console.log(credentials)

    API.userLogin( credentials )
      .then( res => {
        const { errors, user } = res.data

        if ( errors ) {
          return this.setState({ errors })
        }

        AuthInterface.login( user )
        this.setState({ loggedIn: true })

      })
      .catch(console.error)
  }

  //   API.getUser( {username, password} )
  //     .then( res => {
  //       const { errors, user } = res.data

  //       if ( errors ) {
  //         return this.setState({ errors })
  //       }

  //       AuthInterface.login( user )
  //       this.setState({ loggedIn: true })

  //     })
  //     .catch(console.error)
  // }

  dismissError = idx => {
    const { errors } = this.state

    errors.splice(idx, 1)

    this.setState({ errors })
  }
    

  render() {
    const { loggedIn, newUser, errors, username, password } = this.state
    console.log(this.state)
    if ( loggedIn ) {
      return (
        <Redirect to='/home' />
      )
    }
    return (

        <Container fluid>
            <Row>
                <Col size="md-12">
                    <section className="row columns">
                        <div className="hero-section-login">
                        <div className="hero-section-text-login">
                            <h1>Travelapp</h1>
                            <h3>And explore the endless possibilities your next journey has to offer.</h3>
                        </div>
                            
                                <form className="form-login">
                                    <div className="row columns">
                                    
                                   
                                    <h1>Login</h1>
                                    <div className="floated-label-wrapper-login">             
                                        <Input 
                                            value={this.state.username}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="username" 
                                            placeholder="User Name" 
                                        />
                                    </div>

                                    <div className="password-wrapper-login">
                                        <Input 
                                            value={this.state.password}
                                            onChange={this.handleInputChange} 
                                            id="signup-input" 
                                            name="password" 
                                            type="signup-password" 
                                        /> 
                                    </div>
                                    
                                    <FormBtn
                                        disabled={!(this.state.username && this.state.password)}
                                        onClick={this.handleFormSubmit}>
                                        Login
                                    </FormBtn>
                                    </div>
                                </form>
                              
                            
                        </div>
                    </section>
                
        <Trending></Trending>
        <Testimony></Testimony>  
        <Contact></Contact>
                </Col>
            </Row>
        </Container>            

        

    );
  }
}

export default Login;









// import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
// import API from "../../utils/API";
// import $ from 'jquery';
// import 'foundation-sites';
// // import "./signup.css";
// import Hero from "../../components/Hero";

// import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';


// import { Link } from "react-router-dom";
// import { List, ListItem } from "../../components/List";

// class Login extends Component {
    
//   state = {
//     Login: []
//   };

//   componentDidMount() {
//     this.loadUser();
//     $(document).foundation();
//     console.log(Login)
//     // this.autoComp()
//   }

//   loadUser = () => {
//     API.getUser()
//       .then(res =>
//         this.setState({ 
//           User: res.data }))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//       API.saveUser({
        
//         username: this.state.username,
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         password: this.state.password,
//         address: this.state.address,
//         city: this.state.city,
//         state: this.state.state,
//         zipcode: this.state.zipcode,
//         phoneNumber: this.state.phoneNumber
//       })
//         .then(res => this.loadUser())
//         .catch(err => console.log(err));
//     }
    

//   render() {
//     return (
//     <div id="signup-body">
//         <Container fluid>
//             <Row>
//                 <Col size="md-12">
//                     <section className="row columns">
//                         <div className="hero-section">
//                         <div className="hero-section-text">
//                             <h1>Join Us</h1>
//                             <h3>And explore the endless possibilities your next journey has to offer.</h3>
//                         </div>
//                             <div className="sign-up-form" id="sign-up">
//                                 <form>
//                                     <div className="row columns">
                                    
                                   
//                                     <h1>Create Account</h1>
//                                     <div className="floated-label-wrapper">             
//                                         <Input 
//                                             value={this.state.username}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="username" 
//                                             placeholder="User Name" 
//                                         />
//                                     </div>
//                                     <div className="floated-label-wrapper">
//                                         <Input 
//                                             value={this.state.firstName}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="firstName" 
//                                             placeholder="First Name" 
//                                         /> 
//                                     </div>
//                                     <div className="floated-label-wrapper">             
//                                         <Input 
//                                             value={this.state.lastName}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="lastName" 
//                                             placeholder="Last Name" 
//                                         />
//                                     </div>
//                                     <div className="password-wrapper">
//                                         <Input 
//                                             value={this.state.password}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="password" 
//                                             type="signup-password" 
//                                         /> 
//                                     </div>
//                                     <div className="floated-label-wrapper">             
//                                         <Input 
//                                             value={this.state.address}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="address" 
//                                             placeholder="Address" 
//                                         />
//                                     </div>
//                                     <div className="floated-label-wrapper">
//                                         <Input 
//                                             value={this.state.city}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="city" 
//                                             placeholder="City" 
//                                         /> 
//                                     </div>
//                                     <div className="floated-label-wrapper">             
//                                         <Input 
//                                             value={this.state.state}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="state" 
//                                             placeholder="State" 
//                                         />
//                                     </div>
//                                     <div className="floated-label-wrapper">
//                                         <Input 
//                                             value={this.state.zipcode}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="zipcode" 
//                                             placeholder="Zipcode" 
//                                         /> 
//                                     </div>
//                                     <div className="floated-label-wrapper">             
//                                         <Input 
//                                             value={this.state.phoneNumber}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="phoneNumber" 
//                                             placeholder="Phone Number" 
//                                         />
//                                     </div>
//                                     <div className="floated-label-wrapper">
//                                         <Input 
//                                             value={this.state.paymentMethod}
//                                             onChange={this.handleInputChange} 
//                                             id="signup-input" 
//                                             name="paymentMethod" 
//                                             placeholder="Payment Method" 
//                                         /> 
//                                     </div>
                                    
                                    
//                                     <FormBtn
//                                         disabled={!(this.state.username && this.state.firstName && this.state.lastName && this.state.password
//                             && this.state.address && this.state.city && this.state.state && this.state.zipcode 
//                             && this.state.phoneNumber)}
//                                         onClick={this.handleFormSubmit}>
//                                         Submit Into Database
//                                     </FormBtn>
//                                     </div>
//                                 </form>
                              
//                             </div>
//                         </div>
//                     </section>
//                 </Col>
//             </Row>
//         </Container>            
//       </div>  

    
//     );
//   }
// }

// export default Login;
