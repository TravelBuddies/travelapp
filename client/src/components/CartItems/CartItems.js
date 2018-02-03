// Edited by Mark
import React from "react";
import "./CartItems.css";

const CartItems = () =>

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
		    	<div className="medium-10 cell">
			    	<h4>Passenger names and mileage program numbers:</h4>
					<h6>The Transportation Security Administration (TSA) requires the collection of Secure Flight information (full legal name, gender, date of birth) for each passenger. Enter all passenger names as they appear on the passenger's government-issued photo ID.
					</h6>
				</div>	
	    	</div>
		</div>


		<form>
		  <div className="grid-container">
		    <div className="grid-x grid-padding-x">
		    	<div className="medium-10 cell">
	 				<h5>Passenger 1</h5>
	 			</div>
			    <div className="medium-4 cell">
			        <label>Legal First Name
			        	<input type="text" placeholder="Legal First Name"/>
			        </label>
			    </div>
		        <div className="medium-4 cell">
		        	<label>Legal Middle Name (if on ID)
		        		<input type="text" placeholder="Legal Middle Name"/>
		        	</label>
		      	</div>
		        <div className="medium-4 cell">
		        	<label>Legal Last Name
		        		<input type="text" placeholder="Legal Last Name"/>
		        	</label>
		        </div>
		 	</div>

	 		<div className="grid-x grid-padding-x">

	 			<div className="medium-2 cell">
		        	<select>
		              <option value="">Gender</option>
		              <option value="option1">Female</option>
		              <option value="option2">Male</option>
		            </select>
		      	</div>
		      	<div className="medium-2 cell">
		        	<select>
		              <option value="">Birth Day</option>
		              <option value="option1">1</option>
		              <option value="option2">2</option>
		              <option value="option3">3</option>
		              <option value="option4">4</option>
		              <option value="option5">5</option>
		              <option value="option6">6</option>
		              <option value="option7">7</option>
		              <option value="option8">8</option>
		              <option value="option9">9</option>
		              <option value="option10">10</option>
		              <option value="option11">11</option>
		              <option value="option12">12</option>
		              <option value="option13">13</option>
		              <option value="option14">14</option>
		              <option value="option15">15</option>
		              <option value="option16">16</option>
		              <option value="option17">17</option>
		              <option value="option18">18</option>
		              <option value="option19">19</option>
		              <option value="option20">20</option>
		              <option value="option21">21</option>
		              <option value="option22">22</option>
		              <option value="option23">23</option>
		              <option value="option24">24</option>
		              <option value="option25">25</option>
		              <option value="option26">26</option>
		              <option value="option27">27</option>
		              <option value="option28">28</option>
		              <option value="option29">29</option>
		              <option value="option30">30</option>
		              <option value="option31">31</option>
		            </select>
		      	</div>
		      	<div className="medium-2 cell">
		      		<select>
		        		<option value="">Birth Month</option>
		              	<option value="option1">Jan</option>
		              	<option value="option2">Feb</option>
		             	<option value="option3">Mar</option>
		             	<option value="option4">Apr</option>
		             	<option value="option5">May</option>
		             	<option value="option6">Jun</option>
		             	<option value="option7">Jul</option>
		              	<option value="option8">Aug</option>
		             	<option value="option9">Sep</option>
		             	<option value="option10">Oct</option>
		             	<option value="option11">Nov</option>
		              	<option value="option12">Dec</option>
		            </select>
		      	</div>
		      	<div className="medium-2 cell">
		        	<input type="text" placeholder="Birth Year"/>
		      	</div>
		      	<div className="medium-2 cell">
		        	<input type="text" placeholder="Mileage Program #"/>
		      	</div>
		      	<div className="medium-2 cell">
		        	<input type="text" placeholder="Known Traveler #"/>
		      	</div>
			</div>
		  </div>
		</form>
		<div className="grid-container">
		    <div className="grid-x grid-padding-x">
		    	<div className="medium-3 cell">
		    		<button className="button warning hollow"><a href="/Checkout">Continue</a></button>
				</div>	
	    	</div>
		</div>
	</section>


export default CartItems;