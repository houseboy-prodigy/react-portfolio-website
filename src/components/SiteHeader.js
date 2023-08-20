import React from 'react';
import './SiteHeader.css';
import LinkedButton from './LinkedButton';
import logo from '../logo.svg';

const SiteHeader = () => {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="site-name">Your Website Name</span>
        </div>
        <div className="button-container">
          {/* LinkedButtons for navigation */}
          <LinkedButton title="Home" href="#home" />
          <LinkedButton title="Categories" href="#categories" />
          <LinkedButton title="About Us" href="#about" />
          <LinkedButton title="Vision" href="#vision" />
          {/* Add more LinkedButtons as needed */}
        </div>
      </nav>
      <div className="user-container">
        {/* Display login/register or user info */}
        {/* You can conditionally render the login/register or user info components here */}
      </div>
      <div className="divider"></div> {/* Add a divider at the bottom */}
    </header>
  );
};

export default SiteHeader;
