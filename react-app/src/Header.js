import React from 'react';
import logo from './logo.png';
import searchIcon from './search-icon.png';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="Your Logo" />
      <nav>
        <ul>
          <li><a href="home">For Individuals</a></li>
          <li><a href="services">For Business</a></li>
          <li><a href="about">Claim Center</a></li>
          <li><a href="contact">Prepare & Prevent</a></li>
        </ul>
      </nav>
      <form className="search-form">
        <button type="submit">
          <img src={searchIcon} alt="Search" />
        </button>
      </form>
      <a href="login" className="login-link">Log in</a>
    </nav>
  );
};

export default Header;
