import React from "react";
import "./Questions.css";


const Questions = () =>
    
    <section>
      <div className="hero-FAQs">
        <div className="hero-FAQs-text">
          <h1 className="faq">Frequently Asked Questions</h1>
          <h2 className="faq">If you did not find the answer, please contact us.</h2>
        </div>

        <div className="row">
        
        <div className="large-8 columns">
            <div className="material-accordion">
                <ul className="vertical menu" data-accordion-menu data-multi-open="false">
                    <li>
                        <a href=""><h3 className="faq">Why should I create an account?</h3></a>
                        <ul className="menu vertical nested answers">
                            <li className="answer">
                                <h4>Other than booking your travel, we also offer other benefits such as Travel Card reviews/consultations, helping you find a travel buddy and in the future Travel Reviews.</h4>
                            </li>
                        </ul>
                    </li> 
                    <li>
                        <a href=""><h3 className="faq">What are the accepted forms of payment?</h3></a>
                        <ul className="menu vertical nested answers">
                            <li className="answer">
                                <h4>We currently accept debit and credit cards. We are looking to add Paypal and Bitcoin payment options in the future. </h4>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href=""><h3 className="faq">What makes this site different than all the other sites?</h3></a>
                        <ul className="menu vertical nested answers">
                            <li className="answer">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href=""><h3 className="faq">Does this site offer travel reviews?</h3></a>
                        <ul className="menu vertical nested answers">
                            <li className="answer">
                                <h4>Not at the moment, we are currently working to create this. </h4>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href=""><h3 className="faq">How to change my password?</h3></a>
                        <ul className="menu vertical nested answers">
                            <li className="answer">
                                <h4>You can change your password on the Account page. Click on settings and find the password section. </h4>
                            </li>
                        </ul>
                    </li>


                </ul>
            </div>
        </div>
    </div>


      </div>
    </section> 

    


export default Questions;