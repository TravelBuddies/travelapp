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
      <li className="tabs-title"><a href="#panel2">Fees</a></li>
      <li className="tabs-title"><a href="#panel3">Google Trends</a></li>
    </ul>
    <div className="tabs-content" data-tabs-content="example-tabs">
      <div className="tabs-panel is-active" id="panel1">
        <div className="cardHolder">
          <img className="cardImg" src={Platinum}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>American Express Platinum</h3>
          <p>Benefits</p>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div> 
      </div>
      <div className="tabs-panel" id="panel2">
        <div className="cardHolder">
          <img className="cardImg" src={Platinum}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>American Express Platinum</h3>
          <p>Fees</p>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div>
      </div>   
      <div className="tabs-panel" id="panel3">
        <div className="cardHolder">
          <img className="cardImg" src={Platinum}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>American Express Platinum</h3>
          <h5>
            Google Search Trends
          </h5>
          <form>
            <label><input type="radio" name="mode" value="grouped"> Grouped</label>
            <label><input type="radio" name="mode" value="stacked" checked> Stacked</label>
          </form>
          <svg width="760" height="400"></svg>
        </div> 
      </div>
    </div>
  </div>

  <div className="cardSections">  
    <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
      <li className="tabs-title is-active"><a href="#panel4" aria-selected="true">Benefits</a></li>
      <li className="tabs-title"><a href="#panel5">Fees</a></li>
      <li className="tabs-title"><a href="#panel6">Google Trends</a></li>
    </ul>
    <div className="tabs-content" data-tabs-content="example-tabs">
      <div className="tabs-panel is-active" id="panel4">
        <div className="cardHolder">
          <img className="cardImg" src={csr}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>Chase Saphire Reserve</h3>
          <p>Benefits</p>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div> 
      </div>
      <div className="tabs-panel" id="panel5">
        <div className="cardHolder">
          <img className="cardImg" src={csr}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>Chase Saphire Reserve</h3>
          <p>Fees</p>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div>
      </div>   
      <div className="tabs-panel" id="panel6">
        <div className="cardHolder">
          <img className="cardImg" src={csr}/>
          <button className="button basic apply small small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>Chase Saphire Reserve</h3>
          <form>
            <label><input type="radio" name="mode" value="grouped"> Grouped</label>
            <label><input type="radio" name="mode" value="stacked" checked> Stacked</label>
          </form>
          <svg width="760" height="500"></svg>
        </div> 
      </div>
    </div>
  </div>

  <div className="cardSections">  
    <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
      <li className="tabs-title is-active"><a href="#panel7" aria-selected="true">Benefits</a></li>
      <li className="tabs-title"><a href="#panel8">Fees</a></li>
      <li className="tabs-title"><a href="#panel9">Google Trends</a></li>
    </ul>
    <div className="tabs-content" data-tabs-content="example-tabs">
      <div className="tabs-panel is-active" id="panel7">
        <div className="cardHolder">
          <img className="cardImg" src={citiExec}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>Citi / AAdvantage Executive World Elite </h3>
          <p>Benefits</p>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div> 
      </div>
      <div className="tabs-panel" id="panel8">
        <div className="cardHolder">
          <img className="cardImg" src={citiExec}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>Citi / AAdvantage Executive World Elite </h3>
          <p>Fees</p>
          <p>Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero!</p>
        </div>
      </div>   
      <div className="tabs-panel" id="panel9">
        <div className="cardHolder">
          <img className="cardImg" src={citiExec}/>
          <button className="button basic apply small">Apply</button>
        </div>
        <div className="cardDesc">
          <h3>Citi / AAdvantage Executive World Elite </h3>
          <form>
            <label><input type="radio" name="mode" value="grouped"> Grouped</label>
            <label><input type="radio" name="mode" value="stacked" checked> Stacked</label>
          </form>
          <svg width="760" height="500"></svg>
        </div> 
      </div>
    </div>
  </div>	
</section>

export default CardReview;