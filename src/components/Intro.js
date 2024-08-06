import React from 'react';
import './CSS/intro.css'

const socialLinks = [
  { href: 'https://www.upwork.com/freelancers/~01ed1a15cbe8526049', src: '/img/upwork.svg', alt: 'LinkedIn' },
  { href: 'https://www.linkedin.com/in/joseph-raphael-betito-8b4523227/', src: '/img/linkedin.svg', alt: 'Upwork' },
];

const Intro = () => (
  <div className="intro">
    <div className="intro-one">
      <div className="intro-text">
        <h4>I'M <span>Zeke Betito</span></h4>
        <h1>Product<br />Development<br />and<br />Designer</h1>
        <h3><a  href="mailto:jlbetito0801@gmail.com?subject=Freelancer:%20Joseph%20Raphael%20Betito&body=Hi%20there!%20I'm%20an%20interested%20client,%20can%20we%20discuss%20about:%20(job%20here)?">Contact</a></h3>
      </div>
      <div className="socials">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
    <div className="intro-image">
      <img src="/img/intro-author.png" alt="Zeke Betito" />
    </div>
  </div>
);

export default Intro;
