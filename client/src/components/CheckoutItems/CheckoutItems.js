// Edited by Mark
import React from "react";
import "./CheckoutItems.css";

const CheckoutItems = () =>

	<section>
		<div className="grid-container">
		    <div className="grid-x grid-padding-x">
		    	<div className="medium-10 cell">
			    	<h4>Flight Summary:</h4>
				</div>	
	    	</div>
	    	<div className="grid-x grid-padding-x">
		    	<div className="medium-3 cell">
			    	<h5>Flight #</h5>
			    	<h6>Alaska 389</h6>
			    	<h6>First (P) | Nonstop | Details</h6>
			    	<h6>Alaska 833</h6>
			    	<h6>First (P) | Nonstop | Details</h6>
			    	<hr></hr>
			    	<h6>Alaska 105</h6>
			    	<h6>First (P) | Nonstop | Details</h6>
				</div>	

		    	<div className="medium-3 cell">
			    	<h5>Departs</h5>
			    	<h6>San Francisco (SFO)</h6>
			    	<h6>6:10 am  Sun, Jun 10</h6>
			    	<h6>Portland, OR (PDX) </h6>
			    	<h6>10:50 am  Sun, Jun 10</h6>
			    	<hr></hr>
			    	<h6>Honolulu (HNL)</h6>
			    	<h6>2:00 pm  Sun, Jun 17</h6>
				</div>	

		    	<div className="medium-3 cell">
			    	<h5>Arrives</h5>
			    	<h6>Portland, OR (PDX)</h6>
			    	<h6>7:50 am  Sun, Jun 10</h6>
			    	<h6>Honolulu (HNL)</h6>
			    	<h6>1:38 pm  Sun, Jun 10</h6>
			    	<hr></hr>
			    	<h6>San Francisco (SFO)</h6>
			    	<h6>10:10 pm  Sun, Jun 17</h6>
				</div>	

		    	<div className="medium-3 cell">
			    	<h5>Total price for 1 passenger
$1,742</h5>
				</div>	
	    	</div>
		</div>

		<div className="grid-container">
		    <div className="grid-x grid-padding-x">
		    	<div className="medium-3 cell">
		    		<button className="button warning hollow"><a href="/">Pay Now</a></button>
				</div>	
	    	</div>
		</div>
	</section>


export default CheckoutItems;