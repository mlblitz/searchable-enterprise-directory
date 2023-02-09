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

    // window.history.pushState({}, "", `/login/${username}/${password}`);

    const url = `http://localhost:8081/login?username=${username}&password=${password}`;
    const currentUser = await fetch(url)
      .then(res => res.json());

    // localStorage.setItem("currentUser", currentUser);
    // localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // console.log(localStorage.getItem("currentUser"));
    // currentUser = secureLocalStorage.getItem("currentUser");
    props.setCurrentUser(currentUser);

    handleClose();
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
            <form>
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