import React from 'react';
import { Project } from '../../components';
import { pro1, pro2, pro3, pro4 } from './imports';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './projects.css';

const Projects = () => {
  return (
    <div className="portfolio__blog section__padding" id="projects">
      <div className="portfolio__blog-heading">
        <div />
        <h1 className="gradient__text">Projects</h1>
      </div>
      <div>
        <div className="portfolio__blog-container">
          <div className="portfolio__blog-container-group1">
            <Project
              image={pro1}
              title="Pandora Landing Page"
              text="A mobile responsive landing page for a blockchain platform using React Js and Custom CSS."
              link="https://pandora-blockchain.netlify.app/"
              target={'_blank'}
              rel={'noopener noreferrer'}
            />

            <Project
              image={pro2}
              title="Crypto Tracker"
              text="A basic crypto live tracker built using React hooks and the coinGecko API."
              link="https://mt-tracker2.vercel.app/"
              target={'_blank'}
              rel={'noopener noreferrer'}
            />
          </div>

          <div className="portfolio__blog-container-group2">
            <div>
              <Project
                image={pro3}
                title="Bank Landing Page"
                text="Landing page for a digital bank built with HTML, Css and Vanilla"
                link="https://pandora-blockchain.netlify.app/"
                target={'_blank'}
                rel={'noopener noreferrer'}
              />
            </div>

            <div>
              <Project
                image={pro4}
                title="Pig Game Project"
                text="An application modelled after the popular Pig game"
                link="https://pig-game-es5.netlify.app/"
                target={'_blank'}
                rel={'noopener noreferrer'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
