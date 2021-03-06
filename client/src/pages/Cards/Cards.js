import React, { Component } from "react";
import $ from 'jquery';

import 'foundation-sites';
import "./Cards.css";
import Contact from "../../components/Contact";
import SideNav from "../../components/SideNav";

import CardReview from "../../components/CardReview";


class Cards extends Component {
  state = {
    currentPage: "Cards",
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
    <section>         
      <div className="row columns">
        <div className="hero-card">

          <div className="hero-card-text">
            <h1>Credit Card Reviews</h1>
            <h3>Where will your points take you?</h3>
            <button className="button hollow alert large" data-open="requestConsultation">Request a Credit Card Consultation</button>
          </div>
          <div className="row">

            <select className="creditDropdown">
              <option value="">Credit Range</option>
              <option value="option1">Excelent 800-850</option>
              <option value="option2">Good 750 - 799</option>
              <option value="option3">Fair 700 - 749</option>
              <option value="option3">Bad 650 - 699 </option>
              
            </select>
            <select className="creditDropdown">
              <option value="">Type</option>
              <option value="option1">Credit</option>
              <option value="option2">Charge</option>
              
            </select>
            <select className="creditDropdown">
              <option value="">Hotel</option>
              <option value="option1">Hilton</option>
              <option value="option2">Hyatt</option>
              <option value="option3">Marriot</option>
              <option value="option4">Ritz</option>
              <option value="option4">SPG</option>
              
            </select>
            <select className="creditDropdown">
              <option value="">Airline</option>
              <option value="option1">Alaska Air</option>
              <option value="option2">American Airlines</option>
              <option value="option2">Delta Airlines</option>
              <option value="option2">United Airlines</option>
              
            </select>
            <button className="basic button cardSearch">Search</button>
          </div>
        </div>
      </div>


      <div className="reveal" id="requestConsultation" data-reveal>
        <h4>Request a Card Consultation</h4>
        <form>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="medium-6 cell">
                <label>Name:
                  <input type="text" id="name" placeholder="Name"/>
                </label>
              </div>
              <div className="medium-6 cell">
                <label>Email:
                  <input type="text" id="Email" placeholder="Email"/>
                </label>
              </div>

              <div className="medium-4 cell">
                <label>Primary Airport:
                    <input type="text" id="label" placeholder="3 Letter Code"/>
                </label>
              </div>

              <div className="medium-4 cell">
                <label>Optimize for:
                    <select name="" className="form-control" id="labelColor" input>
                        <option value="">Select</option>
                        <option value="option1">Airlines</option>
                        <option value="option2">Hotel</option>
                        <option value="option3">Both</option>
                    </select>
                </label>
              </div>

              <div className="medium-4 cell">
                <label>Credit Range:
                    <select name="" className="form-control" id="labelColor" input>
                        <option value="">Credit Range</option>
                        <option value="option1">Excelent 800-850</option>
                        <option value="option2">Good 750 - 799</option>
                        <option value="option3">Fair 700 - 749</option>
                        <option value="option3">Bad 650 - 699 </option>
                    </select>
                </label>
              </div>

              <div className="medium-6 cell">
                <label>Preferred Airlines:
                  <input type="text" id="title" placeholder="Title"/>
                </label>
              </div>
              <div className="medium-6 cell">
                <label>Preferred Hotel:
                  <input type="text" id="title" placeholder="Title"/>
                </label>
              </div>


              <div className="medium-12 cell">
                <label>Where are you trying to fly to?
                  <input type="text" id="summary" placeholder="Summary"/>
                </label>
              </div>
              <div className="medium-12 cell">
                <label>
                  Anything else I should know?
                  <textarea  id="content" placeholder="Notes"></textarea>
                </label>
              </div>
              </div>
              <button className="hollow button warning"  id="newNote" href="#" data-close >Submit</button>
            </div>
        </form>

      </div>




      <SideNav></SideNav>
      <CardReview></CardReview>
      <Contact></Contact>
      
    </section>  
            );
  }
} // End of class 

export default Cards;
