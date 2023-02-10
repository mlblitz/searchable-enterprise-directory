import React, { useState, useEffect } from 'react';
import '../styles/Login.css';

const Login = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const url = `http://localhost:8081/login?username=${username}&password=${password}`;
    const currentUser = await fetch(url)
      .then(res => res.json());
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser.emp_id));
    props.setCurrentUser(currentUser.emp_id);

    handleClose();
    window.location.assign('/home');
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
            <form onSubmit={e => handleSubmit(e)}>
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

