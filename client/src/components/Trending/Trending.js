// Edited by Mark
import React from "react";
import "./Trending.css";

const Trending = () =>
<section>
  <div className="featured-image-block-grid">
    <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
      <h2 id="destinationHeader">Trending Cities</h2>
      <p>Start planning your travels here with the latest deals for popular destinations.</p>
    </div>
    <div className="row large-up-4 small-up-2">
      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">New York</span>
        <a href="/"><img className="cities"
          src={"https://unsplash.it/600/440?image=899"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>

      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">San Francisco</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=693"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>

      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">Las Vegas</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=452"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>

      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">Sacramento</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=700"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>
      
      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">Los Angeles</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=667"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>

          
      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">Chicago</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=249"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>
    
      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">Boston</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=382"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>
      
      <div className="image-hover-wrapper">
        <span className="image-hover-wrapper-banner">Seattle</span>
        <a href="/"><img className="cities" src={"https://unsplash.it/600/440?image=1075"}/>
          <span className="image-hover-wrapper-reveal">
            <p>Flights starting from $200<br/><i className="fa fa-link" aria-hidden="true"></i></p>
          </span>
        </a>
      </div>
    </div>
  </div> 

  <div className="featured-image-block-grid">
    <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
      <h2 id="destinationHeader">Get Inspired</h2>
      <div className="card">
        <div className="card-divider">
          <h4>Adventure Seekers</h4>
        </div>
        <div className="card-divider">
          <p>With endless hiking trails, these destinations will satisfy the wildest explorers!</p>
        </div>
        <div className="row">
          <div className="columns">
            <div className="accordion" data-accordion data-multi-expand="false">
              <div className="accordion-item" id="sf" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">San Francisco</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
              <div className="accordion-item" id="chicago" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">Chicago</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
              <div className="accordion-item" id="ny" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">New York</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className="card">
        <div className="card-divider">
          <h4>Foodie Trips</h4>
        </div>
        <div className="card-divider">
          <p>With endless hiking trails, these destinations will satisfy the wildest explorers!</p>
        </div>
        <div className="row">
          <div className="columns">
            <div className="accordion" data-accordion data-multi-expand="false">
              <div className="accordion-item" id="sf" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">San Francisco</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
              <div className="accordion-item" id="chicago" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">Chicago</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
              <div className="accordion-item" id="ny" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">New York</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className="card">
        <div className="card-divider">
          <h4>Historical Sites</h4>
        </div>
        <div className="card-divider">
          <p>With endless hiking trails, these destinations will satisfy the wildest explorers!</p>
        </div>
        <div className="row">
          <div className="columns">
            <div className="accordion" data-accordion data-multi-expand="false">
              <div className="accordion-item" id="sf" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">San Francisco</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
              <div className="accordion-item" id="chicago" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">Chicago</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
              <div className="accordion-item" id="ny" data-accordion-item>
                <a href="#" className="accordion-title"><h5 className="locationName">New York</h5></a>
                <div className="accordion-content" id="content" data-tab-content >
                  <button className="button warning bookNow">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</section>

export default Trending;