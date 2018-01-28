// Edited by Mark
import React from "react";
import "./SideNav.css";


const SideNav = () =>

<aside className="sideNav">
  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="switch2" type="checkbox" name="switch2"/>
      <label className="switch-paddle" for="switch2">
        <span className="show-for-sr">Recent</span>
      </label>
    </div>
    <span>Recent</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="switch3" type="checkbox" name="switch3"/>
      <label className="switch-paddle" for="switch3">
        <span className="show-for-sr">Best Offer</span>
      </label>
    </div>
    <span>Best Offer</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="switch4" type="checkbox" name="switch4"/>
      <label className="switch-paddle" for="switch4">
        <span className="show-for-sr">No FX Fee</span>
      </label>
    </div>
    <span>No FX Fee</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="switch5" type="checkbox" name="switch5"/>
      <label className="switch-paddle" for="switch5">
        <span className="show-for-sr">No Annual Fee</span>
      </label>
    </div>
    <span>No Annual Fee</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="switch6" type="checkbox" name="switch6"/>
      <label className="switch-paddle" for="switch6">
        <span className="show-for-sr">Airport Lounges</span>
      </label>
    </div>
    <span>Airport Lounges</span>
  </div>

</aside>


export default SideNav;