import React from "react";
import Calculator from "../assets/calculator.png";
import payonline from "../assets/payonline.png";
import personalfinance from "../assets/personalfinance.png";
import predictive from "../assets/predictive.png";

function Features() {
  return (
    <div className="feature-container">
      <div className="feature-texts">
        <h3>FEATURES</h3>
        <h1>
          Powerful features for
          <br /> smarter finacial decisions
        </h1>
        <p>
          Everything you need to take control of your finances-built to be
          <br /> simple, secure and smart.
        </p>
      </div>
      <div className="feauture-images">
        <div>
          <img src={Calculator} alt="hero" />
          <img src={payonline} alt="hero" />
        </div>
        <div>
          <img src={personalfinance} alt="hero" />
          <img src={predictive} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Features;
