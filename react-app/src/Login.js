import React, { useState } from 'react';
import './Header.css';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    window.location = '/login';
  };

  return (
    <div>
      <button className="login-button" onClick={handleOpen}>
        Log in
      </button>
      {isOpen && (
        <div className="login-modal">
          <div className="login-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;