// Edited by Mark
import React from "react";
import "./Testimony.css";
import Balloon from "./balloon.jpeg";
import Beach from "./beach.jpeg";
import Clifside from "./clifside.jpeg";
import Tower from "./tower.jpeg";

const Testimony = () =>

<section className="orbit clean-hero-slider" role="region" aria-label="Favorite Space Pictures" data-orbit>
  <div className="orbit-wrapper">
    <div className="orbit-controls">
      <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&/9664;&/xFE0E;</button>
      <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&/9654;&/xFE0E;</button>
    </div>
    <ul className="orbit-container">
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src={Tower} />
          <figcaption className="orbit-caption">
            <h3>Some Grand Tower</h3>
            <p>Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.</p>
            <a href="/" className="button yellow">Book Now</a>
          </figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src={Clifside} />
          <figcaption className="orbit-caption">
            <h3>Buildings on the Cliff</h3>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/" className="button yellow">Book Now</a>
          </figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src={Balloon} />
          <figcaption className="orbit-caption">
            <h3>Sky with Balloons</h3>
            <p>Fusce dapibus, tellus ac cursus commodo, sit amet risus. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam sit amet non magna.</p>
            <a href="/" className="button yellow">Book Now</a>
          </figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src={Beach}/>
          <figcaption className="orbit-caption">
            <h3>The Beach</h3>
            <p>Fusce dapibus, tellus ac cursus commodo, sit amet risus. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam sit amet non magna.</p>
            <a href="/" className="button yellow">Book Now</a>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
  <nav className="orbit-bullets">
    <button className="is-active" data-slide="1"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
    <button data-slide="2"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
    <button data-slide="3"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
    <button data-slide="4"><span className="show-for-sr">Lorem Ipsum Etiam</span></button>
  </nav>
</section>


export default Testimony;