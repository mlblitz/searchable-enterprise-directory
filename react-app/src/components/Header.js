import React, { useState } from 'react';
import logo from '../logo.png';
import searchIcon from '../search-icon.png';
import '../styles/Header.css';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <nav className="header">
      <img src={logo} alt="Your Logo" />
      <nav>
        <ul>
          <li><a href="home">For Individuals</a></li>
          <li><a href="home">For Business</a></li>
          <li><a href="home">Claim Center</a></li>
          <li><a href="home">Prepare & Prevent</a></li>
        </ul>
      </nav>
      <form className="search-form">
        <button type="submit">
          <img src={searchIcon} alt="Search" />
        </button>
      </form>
      
      
    </nav>
  );
};

export default Header;

