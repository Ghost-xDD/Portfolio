import React from 'react';
import neon from '../../assets/neon.gif';
import { FaArrowRight } from 'react-icons/fa';
import { MdWavingHand } from 'react-icons/md';
import './header.css';

const Header = () => {
  return (
    <div className="pandora__header section__padding">
      <div className="pandora__header-content">
        <h1 className="gradient__text">
          Hi There <MdWavingHand />
          <br />
          Welcome to my Personal Portfolio
        </h1>
        <p>
          I am Ademola Adebowale, an enthusiastic Front-End Developer who
          creates modern websites, landing pages and single-page web
          appications.
        </p>

        <div className="pandora__header-cta">
          <button className="pandora__header-cta-btn" type="button">
            Get to know me
          </button>
        </div>
      </div>

      {/* <div className="pandora__header-image">
        <img src={neon} alt="neon" />
      </div> */}
    </div>
  );
};

export default Header;
