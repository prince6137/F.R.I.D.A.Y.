import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Robotics Club</h3>
          <p>Building smart web solutions.</p>
        </div>
         
        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="link-columns">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            

          </ul>
          <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/Achievements">Achievements</a></li>
            <li><a href="/News">News</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
          </div>

        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} YourWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
