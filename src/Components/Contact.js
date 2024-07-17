import React from "react";
import FormComponent from "./FormComponent";

const Contact = () => {
  return (
    <>
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    <h1>or</h1>
    <FormComponent/>
    </>
  );
};

export default Contact;
