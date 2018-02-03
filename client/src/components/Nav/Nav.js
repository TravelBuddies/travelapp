// Edited by Mark
import React from "react";
import "./Nav.css";


const Nav = () =>
  // <nav className="top-bar topbar-responsive">
  //   <div className="top-bar-title">
  //     <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
  //       <button className="menu-icon" type="button" data-toggle></button>
  //     </span>
  //     <a className="topbar-responsive-logo" src="./logo.png" href="/"><strong>Travelapp</strong></a>
  //   </div>
  //     <div id="topbar-responsive" className="topbar-responsive-links">
  //     <div className="top-bar-right">
  //       <ul className="menu simple vertical medium-horizontal dropdown menu navMenu" data-dropdown-menu>
  //         <li><a href="/flights">Flight</a></li>
  //         <li><a href="/hotels">Hotel</a></li>
  //         <li><a href="/cars">Car</a></li>
  //         {/* <li><a href="/packages">Packages</a></li> */}
  //         { /* <li><a href="/Inspire">Inspire</a></li> */}
  //         <li><a href="/TravelBuddy">Travel Buddy</a></li>
  //         <li><a href="/Cards">Card Reviews</a></li>
  //         <li><a href="/TravelReview">Reviews</a></li>
  //         <li><a href="/">Account</a></li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
<section>
  <header>
    <div id="logo"><a className="topbar-responsive-logo" src="./logo.png" href="/"><strong>Travelapp</strong></a></div>

    <div id="cd-hamburger-menu"><a className="cd-img-replace" href="#0">Menu</a></div>
    <div id="cd-cart-trigger"><a className="cd-img-replace" href="#0">Cart</a></div>
  </header>

  <nav id="main-nav">
    <ul>
      <li><a href="/flights">Flight</a></li>
      <li><a href="/hotels">Hotel</a></li>
      <li><a href="/cars">Car</a></li>
      {/* <li><a href="/packages">Packages</a></li> */}
      { /* <li><a href="/Inspire">Inspire</a></li> */}
      <li><a href="/TravelBuddy">Travel Buddy</a></li>
      <li><a href="/Cards">Card Reviews</a></li>
      <li><a href="/TravelReview">Reviews</a></li>
      <li><a href="/user">Account</a></li>
    </ul>
  </nav>

  <div id="cd-shadow-layer"></div>

  <div id="cd-cart">
    <h2>Cart</h2>
    <ul className="cd-cart-items">
      <li>
        <span className="cd-qty">1x</span> Alaska 389
        <div>First Class | SFO - PDX</div>
        <div className="cd-price">$200</div>
        <a href="#0" className="cd-item-remove cd-img-replace">Remove</a>
      </li>

      <li>
        <span className="cd-qty">1x</span> Alaska 833
        <div>First Class | PDX - HNL</div>
        <div className="cd-price">$671</div>
        <a href="#0" className="cd-item-remove cd-img-replace">Remove</a>
      </li>

      <li>
        <span className="cd-qty">1x</span> Alaska 105
        <div>First Class | HNL - SFO</div>
        <div className="cd-price">$871</div>
        <a href="#0" className="cd-item-remove cd-img-replace">Remove</a>
      </li>
    </ul> 

    <div className="cd-cart-total">
      <p>Total <span>$1,742</span></p>
    </div> 

    <a href="/Checkout" className="checkout-btn">Checkout</a>
    
    <p className="cd-go-to-cart"><a href="/Cart">Go to cart page</a></p>
  </div> 
</section>
export default Nav;
    
