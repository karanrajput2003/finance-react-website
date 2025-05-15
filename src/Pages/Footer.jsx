import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-texts">
          <h1>Finova</h1>
          <p>
            Empowering you to take control of your finances, whether it's
            budgeting, saving, or investing. We provide the tools you need to
            make smarter, more confident finacial decisions.
          </p>
        </div>
        <div className="footer-links">
          <div className="links">
            <h3>PRODUCT</h3>
            <p>Features</p>
            <p>Pricing</p>
            <p>Security</p>
          </div>
          <div className="links">
            <h3>COMPANY</h3>
            <p>About us</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
          <div className="links">
            <h3>LEGAL</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
         &#169; 2025 Finova . All rights reserved
      </div>
    </div>
  );
}

export default Footer;
