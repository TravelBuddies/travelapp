import React, { Component } from "react";
import $ from 'jquery';
import 'foundation-sites';
import Questions from "../../components/Questions";
import Contact from "../../components/Contact";



class FAQs extends Component {
  state = {
    currentPage: "FAQs",
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
        <Questions></Questions>
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default FAQs;
