import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import API from "../../utils/API";

// import Navpills from "../../components/Nav"
import $ from 'jquery';

import 'foundation-sites';
import "./Cards.css";
import Contact from "../../components/Contact";
import SideNav from "../../components/SideNav";

import CardReview from "../../components/CardReview";


class Cards extends Component {
  state = {
    currentPage: "Cards",
  // update here if any form details that are needed to be empty.
  };

  componentDidMount() {
    $(document).foundation();
    // Mounting the Most common deals that are found for specific destinations we choose. 
    //  this.loadFlights();
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
    <section>         
      <div class="row columns">
        <div class="hero-card">

          <div class="hero-card-text">
            <h1>Credit Card Reviews</h1>
            <h5>Where will your points take you?</h5>
          </div>
          <div class="row">

            <select class="creditDropdown">
              <option value="">Credit Range</option>
              <option value="option1">750+</option>
              <option value="option2">700 - 749</option>
              <option value="option3">650 - 699</option>
              <option value="option3">650- </option>
              
            </select>
            <select class="creditDropdown">
              <option value="">Type</option>
              <option value="option1">Credit</option>
              <option value="option2">Charge</option>
              
            </select>
            <select class="creditDropdown">
              <option value="">Hotel</option>
              <option value="option1">Hilton</option>
              <option value="option2">Hyatt</option>
              <option value="option3">Marriot</option>
              <option value="option4">Ritz</option>
              <option value="option4">SPG</option>
              
            </select>
            <select class="creditDropdown">
              <option value="">Airline</option>
              <option value="option1">Alaska</option>
              <option value="option2">Option Two</option>
              
            </select>
            <button class="basic button">Search</button>
          </div>
        </div>
      </div>
      <SideNav></SideNav>
      <CardReview></CardReview>
      <Contact></Contact>
      
    </section>  
            );
  }
} // End of class 

export default Cards;
