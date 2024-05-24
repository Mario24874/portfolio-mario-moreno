import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Technologies from './Technologies';
import Projects from './Projects';
import projectsIcon from '../images/projects-icon.svg';
import './Sections.css';
import '../App.css';

function Sections() {
  const [expandedContainer, setExpandedContainer] = useState(null);

  const toggleContainer = (containerName) => {
    setExpandedContainer(containerName === expandedContainer ? null : containerName);
  };

  return (
    <div className="container-section">
      <About expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
      <Skills expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
      <Technologies expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
      <Projects expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
    </div>
  );
}

export default Sections;
