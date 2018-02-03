import React, { Component } from "react";
import $ from 'jquery';
import 'foundation-sites';
import "./About.css";
import Contact from "../../components/Contact";
import TeamMembers from "../../components/TeamMembers";

class About extends Component {
  state = {
    currentPage: "About",
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
        <section>
          <div class="hero-about">

            <div class="hero-about-text">
              <h1>Meet the Team</h1>
              <h3>Will you join us on our journey?</h3>
            </div>
          </div>
        </section> 
        <TeamMembers></TeamMembers>  
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default About;
