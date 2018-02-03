import React, { Component } from "react";
import $ from 'jquery';
import 'foundation-sites';
import "./Checkout.css";
import Contact from "../../components/Contact";
import CartItems from "../../components/CartItems";

class Checkout extends Component {
  state = {
    currentPage: "Checkout",
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
          <div className="hero-checkout">

            <div className="hero-checkout-text">
              <h1>Complete your purchase</h1>
              <h3>Don't let the deals fly away!</h3>
            </div>
          </div>
        </section>  
        <CartItems></CartItems>
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default Checkout;
