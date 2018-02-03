import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import API from "../../utils/API";

// import Navpills from "../../components/Nav"
import $ from 'jquery';
import 'foundation-sites';
import Questions from "../../components/Questions";
import Contact from "../../components/Contact";



class FAQs extends Component {
  state = {
    currentPage: "FAQs",
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
        <Questions></Questions>
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default FAQs;
