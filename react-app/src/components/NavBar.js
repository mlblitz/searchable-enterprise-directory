import React from 'react';
import '../styles/NavBar.css';

const NavBar = ({currentUser}) => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Agents</a></li>
        <li><a href="#">Investors</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Contact Us</a></li>
        <li>{currentUser ? `Welcome, ${currentUser.first_name}` : 'Log in'}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
