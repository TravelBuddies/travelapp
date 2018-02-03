import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import API from "../../utils/API";

// import Navpills from "../../components/Nav"
import $ from 'jquery';
import 'foundation-sites';
import "./Checkout.css";
import Contact from "../../components/Contact";
import CheckoutItems from "../../components/CheckoutItems";
import TeamMembers from "../../components/TeamMembers";

class Checkout extends Component {
  state = {
    currentPage: "Checkout",
  // update here if any form details that are needed to be empty.
  };

  componentDidMount() {
    $(document).foundation();
    // Mounting the Most common deals that are found for specific destinations we choose. 
    // this.loadFlights();
    // this.loadInspirationFlights();
    // this.loadPackageDeals();

  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveFlight({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadFlights())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>        
        <section>
          <div className="hero-checkout">

            <div className="hero-checkout-text">
              <h1>Complete your purchase</h1>
              <h3>Don't let the deals walk away!</h3>
            </div>
          </div>
        </section>  
        <CheckoutItems></CheckoutItems>
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default Checkout;
