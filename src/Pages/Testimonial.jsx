import React from "react";
import TestimonialImg from "../assets/testimonial.png";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-texts">
        <h3>TESTIMONIAL</h3>
        <h1>
          Money talk,
          <br /> from real people
        </h1>
        <p>
          From everyday wins to big milestones-here's 
          <br />how we've helped others take control of their money.
        </p>
      </div>
      <div className="testimonial-detail">
        <div className="testimonial-text">
            <div className="quote">
                "I used to ignore anything finance-related, but how I actually enjoy checking my progess. It's weirdly satisfying."
            </div>
            <div className="author">
                <h3>Jason Brad</h3>
                <h6>Marketing Professional</h6>
            </div>
        </div>
        <div className="testimonial-images">
            <img src={TestimonialImg} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
