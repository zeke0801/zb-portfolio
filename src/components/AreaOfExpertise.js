import React from 'react';
import TriangleGrid from './TriangleGrid';
import './CSS/aoe.css';

const skills = [
  { img: '/img/html.svg', label: 'HTML', years: '6+ Years' },
  { img: '/img/css.svg', label: 'CSS', years: '6+ Years' },
  { img: '/img/javascript.svg', label: 'JavaScript', years: '6+ Years' },
  { img: '/img/react.svg', label: 'React', years: '1+ Years' },
  { img: '/img/python.svg', label: 'Python', years: '4+ Years' },
  { img: '/img/github.svg', label: 'Github', years: '2+ Years' },
  { img: '/img/figma.svg', label: 'Figma', years: '4+ Years' },
  { img: '/img/hubspot.svg', label: 'Hubspot', years: '1+ Year' },
  { img: '/img/wordpress.svg', label: 'WordPress', years: '1+ Year' },
  { img: '/img/wix.svg', label: 'Wix', years: '1+ Year' },
  { img: '/img/teams.svg', label: 'Teams', years: '1+ Year' },
  { img: '/img/clickup.svg', label: 'ClickUp', years: '2+ Year' },
  { img: '/img/slack.svg', label: 'Slack', years: '1+ Year' },
];

const AreaOfExpertise = () => (
  <div id="add-skills" className="aoe">
    <h1>My Skills</h1>
    <TriangleGrid skills={skills} />
  </div>
);

export default AreaOfExpertise;
