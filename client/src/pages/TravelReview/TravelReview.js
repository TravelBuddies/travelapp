import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import API from "../../utils/API";

// import Navpills from "../../components/Nav"
import $ from 'jquery';
import 'foundation-sites';
import "./TravelReview.css";
import Contact from "../../components/Contact";
import Review from "../../components/Review";

class TravelReview extends Component {
  state = {
    currentPage: "TravelReview",
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
          <div class="hero-TravelReview">

            <div class="hero-TravelReview-text">
              <h1>Reviews</h1>
              <h3>Here's what people have to say about Travelapp</h3>
            </div>
          </div>
        </section> 
        <Review></Review>  
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 



export default TravelReview;