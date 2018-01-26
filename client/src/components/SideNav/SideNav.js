// Edited by Mark
import React from "react";
import "./SideNav.css";
import Platinum from "./platinumcard.png";
import csr from "./csr.jpg"
import citiExec from "./citiExec.jpg"

const SideNav = () =>

<aside className="sideNav">
  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="exampleSwitch2" type="checkbox" name="exampleSwitch2">
      <label className="switch-paddle" for="exampleSwitch2">
        <span className="show-for-sr">Recent</span>
      </label>
    </div>
    <span>Recent</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="exampleSwitch3" type="checkbox" name="exampleSwitch3">
      <label className="switch-paddle" for="exampleSwitch3">
        <span className="show-for-sr">Best Offer</span>
      </label>
    </div>
    <span>Best Offer</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="exampleSwitch4" type="checkbox" name="exampleSwitch4">
      <label className="switch-paddle" for="exampleSwitch4">
        <span className="show-for-sr">No F/X Fee</span>
      </label>
    </div>
    <span>No F/X Fee</span>
  </div>

  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="exampleSwitch5" type="checkbox" name="exampleSwitch5">
      <label className="switch-paddle" for="exampleSwitch5">
        <span className="show-for-sr">No Annual Fee</span>
      </label>
    </div>
    <span>No Annual Fee</span>
  </div>
  <div className="switch-toggle-wrapper">
    <div className="switch tiny">
      <input className="switch-input" id="exampleSwitch6" type="checkbox" name="exampleSwitch6">
      <label className="switch-paddle" for="exampleSwitch6">
        <span className="show-for-sr">Airport Lounges</span>
      </label>
    </div>
    <span>Airport Lounges</span>
  </div>

</aside>


export default SideNav;