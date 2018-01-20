// Edited by Mark
import React from "react";
import "./Contact.css";


const Contact = () =>
	<section className="contact-panel" id="contact-panel" data-toggler=".is-active">
      <a className="contact-panel-button" data-toggle="contact-panel">Contact us</a>
      <form action="">
        <div className="row">
          <div className="floated-label-wrapper">
            <label for="full-name">Full name</label>
            <input type="text" id="full-name" name="full name input" placeholder="Full name" />
          </div>
          <div className="floated-label-wrapper">
            <label for="email">Email</label>
            <input type="email" id="email" name="email input" placeholder="Email" />
          </div>
        </div>  
        <div className="row">
          <label>Message *
            <textarea placeholder="Describe your needs" rows="3"></textarea>
          </label>
        </div>
        <div className="contact-panel-actions">
          <button className="cancel-button" data-toggle="contact-panel">Nevermind</button>
          <input type="submit" className="button submit-button" value="Submit" />
        </div>
      </form>
    </section>;

export default Contact;