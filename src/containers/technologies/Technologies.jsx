import React from 'react';
import Technology from '../../components/technology/Technology';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiFirebase, SiTypescript } from 'react-icons/si';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './technologies.css';

const Technologies = () => {
  return (
    <div className="portfolio__technologies section__padding" id="tech">
      <div className="portfolio__technologies-content-header">
        <div />
        <h1 className="gradient__text">Tech Stack</h1>
        <p>Technologies I'm currently working with</p>
      </div>

      {/* 298 * 1425 */}

      <div className="portfolio__technologies-stack gradient__text">
        <div className="portfolio-stack1">
          <Technology icon={<FaHtml5 />} text="Html5" />
          <Technology icon={<FaCss3Alt />} text="CSS3" />
          <Technology icon={<FaSass />} text="Sass" />
        </div>

        <div className="portfolio-stack2">
          <Technology icon={<DiJavascript1 />} text="Javascript" />
          <Technology icon={<FaReact />} text="React" />
          <Technology icon={<FaBootstrap />} text="Bootstrap5" />
        </div>

        <div className="portfolio-stack2">
          <Technology icon={<SiFirebase />} text="Firebase" />
          <Technology icon={<FaGithub />} text="Github" />
          <Technology icon={<FaGitAlt />} text="Git" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
