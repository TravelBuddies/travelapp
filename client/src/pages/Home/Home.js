import React, { Component } from "react";
import $ from 'jquery';

import 'foundation-sites';



import Hero from "../../components/Hero";
import Trending from "../../components/Trending";
import Contact from "../../components/Contact";
import Testimony from "../../components/Testimony";

class Home extends Component {
  state = {
    currentPage: "Home",
  // update here if any form details that are needed to be empty.
  };

  componentDidMount() {
    $(document).foundation();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  render() {
    return (
      <div>        
        <Hero></Hero>
        <Trending></Trending>
        <Testimony></Testimony>  
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default Home;
