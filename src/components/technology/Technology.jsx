import React from 'react';
import './technology.css';

const Technology = ({ icon, text }) => {
  return (
    <div className="portfolio__technology-container">
      <div className="portfolio__technology-container-content">
        <div className="portfolio__technology-container-icons">{icon}</div>

        <div className="portfolio__technology-container-languages">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Technology;
