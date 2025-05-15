import React from "react";
import SecurityImg from "../assets/security.png";

function Security() {
  return (
    <div className="security-container">
      <div className="security-texts">
        <h3>COMPLAINT, SECURE AND ALWAYS RELIABLE</h3>
        <h1>
          Bank-Level security
          <br />for your peace of mind
        </h1>
        <p>
          From setting goals to tracking your progress-here's how we help
          <br /> you take control of your money in just a few easy steps.
        </p>
        <button>Get Started</button>
      </div>
      <div className="security-images">
        <img src={SecurityImg} alt="Security"/>
      </div>
    </div>
  );
}

export default Security;
