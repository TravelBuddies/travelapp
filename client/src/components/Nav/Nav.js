import React from "react";
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
  <nav className="nav-extended">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo center">Logo</a>
      <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/flights"><i className="material-icons">flight</i></a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/hotels"><i className="material-icons">hotel</i></a></li>
        <li><a href="/users"><i className="material-icons">people</i></a></li>
      </ul>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/flights"><i className="material-icons">flight</i></a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/hotels"><i className="material-icons">hotel</i></a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="/flights">Flights</a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/hotels">Hotels</a></li>
      </ul>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a className="active" href="/flights">Flights</a></li>
        <li className="tab"><a href="/cars">Cars</a></li>
        <li className="tab"><a href="/hotels"> Hotels</a></li>
        <li className="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  
  </nav>;
    

export default Nav;
