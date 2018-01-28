// updated by Mark
import React from "react";
import "./Footer.css";

const Footer = () =>
    <footer className="footer">
        <div className="footer-bottom">
          <div className="column">
            <p className="footerFirst"><a href="/">Privacy</a></p>
            <p className="footerspace">|</p>
	        <p><a href="/"> Terms of Service</a></p>
	        <p className="footerspace">|</p>
	        <p><a href="/"> FAQs</a></p>
	        <p className="footerspace">|</p>
	        <p><a href="/About"> About Us</a></p>
	        <p className="footerspace">|</p>
	        <p><a href="/"> Site Map</a></p>
	        <p className="footerspace">|</p>
	        <p> &copy; 2018 Travel App All Rights Reserved</p>
          </div>
        </div>
    </footer>;

export default Footer;
