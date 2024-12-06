import React, { useState } from "react";
import FormComponent from "./FormComponent";

const Contact = () => {
  const [email, setEmail] = useState(""); // State for email

  const handleSubmit = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email) {
      alert("Email field cannot be empty.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Save to localStorage
      localStorage.setItem("contactEmail", email);
  
      // Show confirmation popup
      alert("Your email has been saved successfully!");
  
      // Clear the input field
      setEmail("");
    }
  };
  

  return (
    <>
      <div
        className="contact-page-wrapper"
        id="contact"
        style={{
          backgroundColor: "pink",
          marginTop: "40px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            
          />
          <button
            className="secondary-button"
            onClick={handleSubmit} // Handle submit
           
          >
            Submit
          </button>
        </div>
      </div>
      <FormComponent />
    </>
  );
};

export default Contact;
