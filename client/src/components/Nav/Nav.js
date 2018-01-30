// Edited by Mark
import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav className="top-bar topbar-responsive">
    <div className="top-bar-title">
      <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle></button>
      </span>
      <a className="topbar-responsive-logo" href="/"><strong>Travelapp</strong></a>
    </div>
      <div id="topbar-responsive" className="topbar-responsive-links">
      <div className="top-bar-right">
        <ul className="menu simple vertical medium-horizontal dropdown menu" data-dropdown-menu>
          <li><a href="/flights">Flight</a></li>
          <li><a href="/hotels">Hotel</a></li>
          <li><a href="/cars">Car</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/Inspire">Inspire</a></li>
          <li>
            <a href="/">Account</a>
            <ul className="menu">
              <li><a href="/Cards" className="cardNav">Card Reviews</a></li>
              <li><a href="/">Travel Reviews</a></li>
              <li><a href="/">Travel Buddy</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

export default Nav;
    
