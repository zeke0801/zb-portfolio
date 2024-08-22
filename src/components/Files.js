import React from 'react';
import './CSS/files.css';

const certifications = [
    { img: '/img/hs1.png', alt: 'Hubspot SEO I' },
    { img: '/img/hs2.png', alt: 'Hubspot SEO II' },
    { img: '/img/scrum.png', alt: 'Scrum Agile' },
];

const resume = [
    {
        img: '/img/betito-resume.png',
        alt: 'Betito Resume',
        link: 'pdf/Betito_Resume.pdf',
    },
];

const Experience = () => (
  <div id="add-cert" className='files'>
    <h1>Certifications</h1>
    <div className='certs'>
      {certifications.map((cert, index) => (
        <div key={index} className='hs'>
          <img src={cert.img} alt={cert.alt} />
        </div>
      ))}
    </div>
    <h1 id="add-resume">Resume</h1>
    <div className='resume'>
      {resume.map((item, index) => (
        <div key={index} className='hs'>
          <a href={item.link} target='_blank' rel='noopener noreferrer' className='view-link'>
            <img src={item.img} alt={item.alt} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
