// Edited by Mark
import React from "react";
import "./CardReview.css";
import Platinum from "./platinumcard.png";
import csr from "./csr.jpg"
import citiExec from "./citiExec.jpg"

const CardReview = () =>

<section className="mainCard"> 
  <div className="cardSections">  
    <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
      <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Benefits</a></li>
      <li className="tabs-title"><a href="#panel2">Target User</a></li>
    </ul>
    <div className="tabs-content" data-tabs-content="example-tabs">
      <div className="tabs-panel is-active" id="panel1">
        <div className="cardHolder">
          <img alt="" className="cardImg" src={Platinum}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3 className="cardName">American Express Platinum</h3>
          <h4 className="annualFee">Annual Fee: $550</h4>
          <h5>Benefits</h5>
          <ul className="listOne">
            <li>60,000 Membership Rewards Points after $5000 of spend in 3 months*</li>
            <li>5x Points when booking directly with Airline</li>
            <li>Uber: Up to $200 annual credit & VIP status</li>
            <li>$200 Airline Incidental Credit</li>
            <li>Centurion Lounge Access</li>
            <li>No Foreign Trans Fee</li>
          </ul>
          <ul className="listTwo">
            <li>Global Entry or TSA TSA Pre✓™ Credit</li>
            <li>5x Points when booking travel with AmEx</li>
            <li>Starwood Preffered Gold Elite Membership</li>
            <li>Free Boingo Membership</li>
            <li>Hilton Gold Membership</li>
            <li>Concierge</li>
          </ul>
          <p>*60,000 MR points are worth up to $600 when used for travel. Can be transfered to Airline/Hotel loyalty programs.</p>
        </div> 
      </div>
      <div className="tabs-panel" id="panel2">
        <div className="cardHolder">
          <img alt="" className="cardImg" src={Platinum}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3 className="cardName">American Express Platinum</h3>
          <h4 className="annualFee">Annual Fee: $550</h4>
          <h5>Target User</h5>
          <h6>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</h6>
        </div>
      </div>   
    </div>
  </div>

  <div className="cardSections">  
    <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
      <li className="tabs-title is-active"><a href="#panel4" aria-selected="true">Benefits</a></li>
      <li className="tabs-title"><a href="#panel5">Target User</a></li>
    </ul>
    <div className="tabs-content" data-tabs-content="example-tabs">
      <div className="tabs-panel is-active" id="panel4">
        <div className="cardHolder">
          <img alt="" className="cardImg" src={csr}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3 className="cardName">Chase Sapphire Reserve</h3>
          <h4 className="annualFee">Annual Fee: $450</h4>
          <h5>Benefits</h5>
          <ul className="listOne">
            <li>50,000 Ultimate Rewards Points after $4000 of spend in 3 months*</li>
            <li>3x Points on Travel</li>
            <li>3x Points on Dining</li>
            <li>$300 Annual Travel Credit</li>
            <li>Priority Pass Lounge Membership</li>
            <li>No Foreign Trans Fee</li>
          </ul>
          <ul className="listTwo">
            <li>Global Entry or TSA TSA Pre✓™ Credit</li>
            <li>Auto Rental Collision Damage Waiver (up to $75,000)</li>
            <li>Purchase/Price/Return Protection</li>
            <li>Trip Cancellation Insurance</li>
            <li>Lost Luggage</li>
            <li>Trip Delay Insurance</li>
          </ul>
          <p>*50,000 UR points are worth $750 when used for travel. Can be transfered to Airline/Hotel loyalty programs.</p>
        </div> 
      </div>
      <div className="tabs-panel" id="panel5">
        <div className="cardHolder">
          <img alt="" className="cardImg" src={csr}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3 className="cardName">Chase Sapphire Reserve</h3>
          <h4 className="annualFee">Annual Fee: $450</h4>
          <h5>Target User</h5>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div>
      </div>   
    </div>
  </div>

  <div className="cardSections">  
    <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
      <li className="tabs-title is-active"><a href="#panel7" aria-selected="true">Benefits</a></li>
      <li className="tabs-title"><a href="#panel8">Target User</a></li>
    </ul>
    <div className="tabs-content" data-tabs-content="example-tabs">
      <div className="tabs-panel is-active" id="panel7">
        <div className="cardHolder">
          <img alt="" className="cardImg" src={citiExec}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3 className="cardName">Citi AAdvantage Executive World Elite </h3>
          <h4 className="annualFee">Annual Fee: $450</h4>
          <h5>Benefits</h5>
          <ul className="listOne">
            <li>50,000 AAdvantage Points after $5000 of spend in 3 months</li>
            <li>Can be redeemed for (depending on availability)</li>
            <li>4 Roundtrip economy flights under 500 Miles</li>
            <li>1 Roundtrip economy flight to South America</li>
            <li>1 Roundtrip economy flight to Europe</li>
            <li>One-way business flight to Europe</li>
          </ul>
          <ul className="listTwo">
            <li>Global Entry or TSA TSA Pre✓™ Credit</li>
            <li>Complimentary Admiral Lounge Memberhsip (worth: $950)</li>
            <li>Free Checked Bags on American (1 per companion up to 8):</li>
            <li>10,000 EQM after $40,000 in spend (for Elite Status)</li>
            <li>2x per dollar spent on American Airlines</li>
            <li>No Foreign Transaction Fee</li>
          </ul>
        </div> 
      </div>
      <div className="tabs-panel" id="panel8">
        <div className="cardHolder">
          <img alt="" className="cardImg" src={citiExec}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3 className="cardName">Citi AAdvantage Executive World Elite </h3>
          <h4 className="annualFee">Annual Fee: $450</h4>
          <h5>Target User</h5>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div>
      </div>
    </div>     
  </div>	
</section>

export default CardReview;