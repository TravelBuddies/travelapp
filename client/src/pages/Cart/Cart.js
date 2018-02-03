import React, { Component } from "react";
import $ from 'jquery';
import 'foundation-sites';
import "./Cart.css";
import Contact from "../../components/Contact";
import CartItems from "../../components/CartItems";

class Cart extends Component {
  state = {
    currentPage: "Cart",
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
          <div className="hero-cart">
            <div className="hero-cart-text">
              <h1>Review your cart</h1>
            </div>
            <div className="row">
            </div>
          </div>
        </section> 
        <CartItems></CartItems> 
        <Contact></Contact>
        
      </div>  
            );
  }
} // End of class 

export default Cart;
