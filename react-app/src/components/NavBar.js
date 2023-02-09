import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Agents</a></li>
        <li><a href="#">Investors</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
