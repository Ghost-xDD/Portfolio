import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './about.css';

const About = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
      <div className="portfolio__about section__padding" id="about">
        <div className="portfolio__about__content">
          <div />
          <h1 className="gradient__text">About Me</h1>
          <p>
            Hi There! My name Is Adebowale. My interest in web development
            started back in 2020 when I tried customizing some HTML templates I
            found online. Turns out, that small experiment piqued my interest in
            full time web development.
            <br />
            Fast forward to today, I've worked with a number of clients helping
            them build digitally accessible, aesthetically pleasing products.
            Currently, I'm exploring the world of blockchains and looking to
            build the future of technology with other amazing people.
          </p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default About;
