//Edited by Mark
import React from "react";
import "./Hero.css";

// const Jumbotron = ({ children }) =>
//   <div style={{ height: 300, clear: 'both' }} className="jumbotron">
//     {children}
//   </div>;

const Jumbotron = ({ children }) =>
	<section className="row columns">
	    <div className="hero-section">
	      <div className="hero-section-text">
	        <h1>Header</h1>
	        <h5>subtitle about anything you like</h5>
	      </div>
	      <div className="translucent-form-overlay">
	        <form>
	          <div className="row columns"></div>
	          <div className="floated-label-wrapper">
	            <label for="email">Email</label>
	            <input type="email" id="email" name="email input" placeholder="Email">
	          </div>
	          <div className="floated-label-wrapper">
	            <label for="pass">Password</label>
	            <input type="password" id="pass" name="password input" placeholder="Password">
	          </div>
	          <div className="row columns">
	            <div id="rememberMe">
	              <input type="checkbox">
	              <label className="rememberLabel" for="rememberMe">Remember Me</label>
	            </div>
	          </div>
	          <div className="row columns">
	            <button type="button" className="primary button expanded search-button" id="logInButton">
	                Login
	            </button>
	          </div>
	            <p id="register">New user? <a href="#">Register Here</a></p>
	       </form>
	      </div>
	    </div>
    </section>;

export default Jumbotron;
