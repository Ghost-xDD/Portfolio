import React from 'react';
import { RiLinkedinBoxFill, RiTwitterFill, RiGithubFill } from 'react-icons/ri';
import './footer.css';

const Footer = () => {
  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-heading">
        <h1>Ademola Adebowale</h1>
        <p>GhostxD</p>
      </div>

      <div className="portfolio__footer-links_container"></div>

      {/* <div className="portfolio__footer-links_container">
        <p>
          <a href="#projects">Projects</a>
        </p>

        <p>
          <a href="#tech">Technologies</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
      </div> */}

      <div className="portfolio__footer-sign">
        <a href="https://github.com/Ghost-xDD">
          <RiGithubFill />
        </a>
        <a href="https://twitter.com/Ghost_xD2">
          <RiTwitterFill />
        </a>
        <a href="https://www.linkedin.com/in/ademola-adebowale-3a2824147/">
          <RiLinkedinBoxFill />
        </a>
      </div>
    </div>
  );
};

export default Footer;
