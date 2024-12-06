import React from "react";
import ProfilePic from "../Assets/myphoto.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonial" style={{marginTop:"40px",borderRadius:"10px"}} >
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Food is more than just sustenance; it is a universal language that transcends borders, connecting people and cultures. </p>
      </div>
      <div className="testimonial-section-bottom">
      <img src={ProfilePic} alt="" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
        <p>
        Food is a reflection of culture and tradition. Each cuisine has its own unique flavors, techniques, and ingredients, often shaped by geography, history, and lifestyle    </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>yashwant kewat</h2>
      </div>
    </div>
  );
};

export default Testimonial;
