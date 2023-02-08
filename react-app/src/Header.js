// Header.js
import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Your Logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <form className="search-form">
        <input type="text" placeholder="Search..." />
        <button type="submit">Go</button>
      </form>
      <a href="#login" className="login-link">Login</a>
    </header>
  );
};

export default Header;
