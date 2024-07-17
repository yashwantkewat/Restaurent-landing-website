import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css';
import pic from "../Assets/john-doe-image.png"

const About = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="about-page" id='about'>
      <animated.div style={fadeIn} className="section">
        <h2>Company History</h2>
        <p>Our journey began in [Year], with a simple idea...</p>
        {/* Add timeline animation here */}
      </animated.div>

      <animated.div style={fadeIn} className="section">
        <h2>Mission & Vision</h2>
        <p><strong>Our Mission:</strong> To deliver fresh, delicious meals...</p>
        <p><strong>Our Vision:</strong> To be the most trusted and preferred food delivery service...</p>
        {/* Add parallax scrolling effect here */}
      </animated.div>

      <animated.div style={fadeIn} className="section">
        <h2>Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={pic} alt="[Team Member 1]" />
            <p>[joe meglane] - [Role]</p>
          </div>
          <div className="team-member">
            <img src={pic} alt="[Team Member 2]" />
            <p>[joe meglane] - [Role]</p>
          </div>
          <div className="team-member">
            <img src={pic} alt="[Team Member 3]" />
            <p>[joe meglane] - [Role]</p>
          </div>
        </div>
        {/* Add hover effect here */}
      </animated.div>

      <animated.div style={fadeIn} className="section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <h3>Fast Delivery</h3>
            <p>Get your food delivered quickly and efficiently.</p>
          </div>
          <div className="service-card">
            <h3>Wide Selection</h3>
            <p>Choose from a variety of cuisines and dishes.</p>
          </div>
          <div className="service-card">
            <h3>Easy Ordering</h3>
            <p>Our user-friendly app makes ordering a breeze.</p>
          </div>
          <div className="service-card">
            <h3>Customer Support</h3>
            <p>We're here to help with any questions or issues.</p>
          </div>
        </div>
        {/* Add card flip animation here */}
      </animated.div>
    </div>
  );
};

export default About;