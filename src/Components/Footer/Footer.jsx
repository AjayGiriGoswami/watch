import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleResponseClick = () => {
    // code to send response goes here
    // use the email value here to send the response to the user's email address
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="response-email"
        placeholder="Enter your email address"
        required
      />
      <button onClick={handleResponseClick} className="response-button">Send Response</button>
      <div className="footer-copyright">
        @{new Date().getFullYear()} Goswami. All rights reserved.
      </div>
     
    </footer>
  );
};

export default Footer;