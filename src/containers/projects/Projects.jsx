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
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <Project
                image={pro3}
                title="Gizmo Defi Dashboard"
                text="A Multichain Defi dashboard powered in the backend by Moralis"
                link="https://gizmo-defi.vercel.app/"
                target={'_blank'}
                rel={'noopener noreferrer'}
              />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <Project
                image={pro2}
                title="MT Crypto Tracker"
                text="A Cryptocurrency live tracker built using React and the coinGecko API."
                link="https://mt-tracker2.vercel.app/"
                target={'_blank'}
                rel={'noopener noreferrer'}
              />
            </AnimationOnScroll>
          </div>

          <div className="portfolio__blog-container-group2">
            <div>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce="true"
              >
                <Project
                  image={pro1}
                  title="Pandora Landing Page"
                  text="A mobile responsive landing page for a blockchain platform using React Js and Custom CSS."
                  link="https://pandora-blockchain.netlify.app/"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                />
              </AnimationOnScroll>
            </div>

            <div>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce="true"
              >
                <Project
                  image={pro4}
                  title="Elrond Wallet Clone"
                  text="A Desktop Clone of the native wallet for the Elrond blockchain"
                  link="https://elrond-wallet.vercel.app/"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
