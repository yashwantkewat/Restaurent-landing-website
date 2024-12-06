import React from 'react';
import { useSpring, animated } from 'react-spring';
import "../App.css"
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
            <img src='https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.jpg?s=612x612&w=0&k=20&c=-HO3lycnJz194GthET07cqQfvic29nfXP5ITtC--kig=' alt="[Team Member 1]" />
            <p>[joe meglane] - [Founder]</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1359179449/photo/young-man-stock-photo.jpg?s=612x612&w=0&k=20&c=q2iyicjk7WPNmp9E1VnOI48A7qcXEaDLQ4d91iWU0ck=" alt="[Team Member 2]" />
            <p>[Harsha sahni] - [Hr]</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/926243716/photo/portrait-of-cool-elegant-boss-in-shirt-pants-holding-one-hand-in-pocket-and-in-another-one.jpg?s=612x612&w=0&k=20&c=jVpl_ovF3bpyicq6ZmQPF0qotHGUoG1b5iGUmyYlpHw=" alt="[Team Member 3]" />
            <p>[karthik solanki] - [senior dev]</p>
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