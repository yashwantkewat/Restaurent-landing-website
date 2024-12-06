import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";
import "../Allcss/footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <div className="footer-wrapper" id="footer">
      <Fade>
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footer-icons">
            <Bounce>
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </Bounce>
          </div>
        </div>
      </Fade>
      <Zoom>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
          <div className="footer-section-columns">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Blog</span>
            <span>FAQ</span>
            <span>Support</span>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Footer;
