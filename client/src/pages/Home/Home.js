import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

// import Nav from "../../components/Nav";
import Navpills from "../../components/Nav"
import Hero from "../../components/Hero";
import Flights from "../Flights";
import Cars from "../Cars";
import Hotels from "../Hotels";
import Packages from "../Packages";
import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";

class Home extends Component {
  state = {
    currentPage: "Home",
  // update here if any form details that are needed to be empty.
  };

  componentDidMount() {
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
        <Hero></Hero>
          <div class="featured-image-block-grid">
            <div class="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
              <h2 id="destinationHeader">Top Destinations</h2>
              <p>Start planning your travels here with the latest deals for popular destinations.</p>
            </div>
            <div class="row large-up-4 small-up-2">
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=899" />
                  <p class="text-center featured-image-block-title">New York</p>
                </a>
              </div>
              
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=693" />
                  <p class="text-center featured-image-block-title">San Francisco</p>
                </a>
              </div>
              
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=452" />
                  <p class="text-center featured-image-block-title">Las Vegas</p>
                </a>
              </div>
              
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=700" />
                  <p class="text-center featured-image-block-title">Sacramento</p>
                </a>
              </div>
              
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=667" />
                  <p class="text-center featured-image-block-title">Los Angeles</p>
                </a>
              </div>
            
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=249" />
                  <p class="text-center featured-image-block-title">Chicago</p>
                </a>
              </div>
              
              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=382" />
                  <p class="text-center featured-image-block-title">Boston</p>
                </a>
              </div>

              <div class="featured-image-block column">
              <a href="/">
                  <img alt="" src="https://unsplash.it/600/440?image=1075" />
                  <p class="text-center featured-image-block-title">Seattle</p>
                </a>
              </div>
            </div>
          </div>
        <Contact></Contact>
        
      </div>  
            );
  }
}

export default Home;
