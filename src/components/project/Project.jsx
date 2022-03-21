import React from 'react';
import './project.css';

const Project = ({ image, title, text }) => {
  return (
    <div className="portfolio__project-container__project project__border">
      <div className="portfolio__project-container__project-title">
        <div className="portfolio__project-container-image">
          <img src={image} alt="img" />
        </div>
        <div className="portfolio__project-container-content">
          <h3 className="h3-color">{title}</h3>
          {/* <div /> */}
          <p>{text}</p>
        </div>

        <div className="portfolio__project-container-button">
          <div>
            <a href="#">Live Demo</a>
          </div>
        </div>
      </div>

      {/* <div className="pandora__project-container_project-text"></div> */}
    </div>
  );
};

export default Project;
