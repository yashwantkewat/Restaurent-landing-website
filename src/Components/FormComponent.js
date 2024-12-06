import React, { useState } from "react";
import "../Allcss/formComponent.css";

const FormComponent = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const validateSignUp = () => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric and underscore, 3-20 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
    const passwordRegex = /^.{6,}$/; // At least 6 characters

    if (!usernameRegex.test(signUpData.username)) {
      alert("Username must be 3-20 characters and contain only letters, numbers, or underscores.");
      return false;
    }
    if (!emailRegex.test(signUpData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!passwordRegex.test(signUpData.password)) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (validateSignUp()) {
      localStorage.setItem(signUpData.username, JSON.stringify(signUpData));
      alert("Sign Up successful! You can now Sign In.");
      setSignUpData({ username: "", email: "", password: "" });
      setIsSignUpMode(false);
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem(signInData.username);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.password === signInData.password) {
        alert("Sign In successful!");
      } else {
        alert("Invalid password. Please try again.");
      }
    } else {
      alert("User not found. Please Sign Up first.");
    }
    setSignInData({ username: "", password: "" });
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="form-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleSignInSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signInData.username}
                onChange={handleSignInChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signInData.password}
                onChange={handleSignInChange}
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signUpData.username}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>New user first sign up.</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Already signed up? Sign in here.</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
