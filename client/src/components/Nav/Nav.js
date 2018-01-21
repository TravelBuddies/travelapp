// Edited by Mark
import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav class="top-bar topbar-responsive">
    <div class="top-bar-title">
      <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle></button>
      </span>
      <a class="topbar-responsive-logo" href="/"><strong>Travelapp</strong></a>
    </div>
      <div id="topbar-responsive" class="topbar-responsive-links">
      <div class="top-bar-right">
        <ul class="menu simple vertical medium-horizontal">
          <li><a href="/flights">Flight</a></li>
          <li><a href="/hotels">Hotel</a></li>
          <li><a href="/cars">Car</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="#">Inspire</a></li>
          <li>
            <button type="button" class="button hollow topbar-responsive-button">Account</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

export default Nav;
    
