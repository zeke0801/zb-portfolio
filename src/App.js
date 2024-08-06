import React from 'react';
import { Helmet } from 'react-helmet';
import './components/CSS/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import AreaOfExpertise from './components/AreaOfExpertise';
import Work from './components/Work';
import Experience from './components/JobExp';
import Files from './components/Files';
import Contact from './components/Contact';
import ReturnToTop from './components/ReturnToTop';

function App() {
  return (
    <>
      <Helmet>
        <title>Zeke Betito Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. Here you can find information about my skills, experience, and work." />
        <meta name="keywords" content="portfolio, skills, experience, work, front end developer, figma, design, project management" />
        <meta property="og:title" content="ZB: Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio. Here you can find information about my skills, experience, and work." />
        <meta property="og:image" content="/ZB.png" />
      </Helmet>
      <Header />
      <Intro />
      <About />
      <AreaOfExpertise />
      <Work />
      <Experience />
      <Files />
      <Contact />
      <ReturnToTop />
    </>
  );
}

export default App;
