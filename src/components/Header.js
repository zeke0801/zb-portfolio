import React from 'react';
import './CSS/header.css'

const Header = () => (
  <header className="App-header">
    <div className="logo">
      <img src="/img/ZB.png" alt="Logo" />
    </div>
    <nav className="nav-links">
      <a href="#add-about">About</a>
      <a href="#add-skills">Skills</a>
      <a href="#add-port">Portfolio</a>
      <a href="#add-exp">Experience</a>
      <a href="#add-cert">Certification</a>
      <a href="#add-resume">Resume</a>
      <a href="#add-contact">Contact</a>
    </nav>
    <div className="social-icons">
    </div>
  </header>
);

export default Header;
