import React, { useState } from 'react';
import {
  RiMenu3Line,
  RiCloseLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiGithubFill,
} from 'react-icons/ri';
import './navbar.css';

// BEM -- Block Element Modifier
const Menu = () => (
  <>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#tech">Technologies</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h2 className="">GhostxD</h2>
        </div>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="portfolio__navbar-sign">
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
      <div className="portfolio__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="portfolio__navbar-sign">
              <a href="#">
                <RiLinkedinBoxFill />
              </a>
              <a href="#">
                <RiTwitterFill />
              </a>
              <a href="https://github.com/Ghost-xDD">
                <RiGithubFill />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
