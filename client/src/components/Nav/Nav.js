// Edited by Mark
import React from "react";
import "./Nav.css";

const Nav = () =>
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <button type="button" className="collapsed navbar-toggle">
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar" /> <span className="icon-bar" />
  //         <span className="icon-bar" />
  //       </button>
  //       <a href="/" className="navbar-brand">
  //         React Reading List
  //       </a>
  //     </div>
  //   </div>
  // </nav>;
  // <nav className="nav-extended">
  //   <div className="nav-wrapper">
  //     <a href="/" className="brand-logo center">Logo</a>
  //     <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
  //     <ul id="nav-mobile" className="right hide-on-med-and-down">
  //       <li><a href="/flights"><i className="material-icons">flight</i></a></li>
  //       <li><a href="/cars">Cars</a></li>
  //       <li><a href="/hotels"><i className="material-icons">hotel</i></a></li>
  //       <li><a href="/users"><i className="material-icons">people</i></a></li>
  //     </ul>
  //     <ul id="nav-mobile" className="left hide-on-med-and-down">
  //       <li><a href="/flights"><i className="material-icons">flight</i></a></li>
  //       <li><a href="/cars">Cars</a></li>
  //       <li><a href="/hotels"><i className="material-icons">hotel</i></a></li>
  //     </ul>
  //     <ul className="side-nav" id="mobile-demo">
  //       <li><a href="/flights">Flights</a></li>
  //       <li><a href="/cars">Cars</a></li>
  //       <li><a href="/hotels">Hotels</a></li>
  //     </ul>
  //   </div>
  //   <div className="nav-content">
  //     <ul className="tabs tabs-transparent">
  //       <li className="tab"><a className="active" href="/flights">Flights</a></li>
  //       <li className="tab"><a href="/cars">Cars</a></li>
  //       <li className="tab"><a href="/hotels"> Hotels</a></li>
  //       <li className="tab"><a href="#test4">Test 4</a></li>
  //     </ul>
  //   </div>
  
  // </nav>
  <nav className="top-bar topbar-responsive">
    <div className="top-bar-title">
      <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle></button>
      </span>
      <a className="topbar-responsive-logo" href="/"><strong>Travelapp</strong></a>
    </div>
    <div id="topbar-responsive" className="topbar-responsive-links">
      <div className="top-bar-right">
        <ul className="menu simple vertical medium-horizontal">
          <li><a href="/">Flight</a></li>
          <li><a href="/">Hotel</a></li>
          <li><a href="/">Car</a></li>
          <li><a href="/">Packages</a></li>
          <li><a href="/">Inspire</a></li>
          <li>
            <button type="button" className="button hollow topbar-responsive-button">Account</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
    

export default Nav;
