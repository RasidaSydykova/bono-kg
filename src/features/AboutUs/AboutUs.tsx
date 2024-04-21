import React from 'react';
import Cards from '../../components/Cards/Cards';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us-block container">
      <div className="top">
        <div className="img">
          <img src="/about-us/about-us-img1.jpg" alt="Cook" />
        </div>
        <div className="cards">
          <Cards />
        </div>
      </div>

      <div className="bottom">
        <div className="img">
          <img src="/about-us/about-us-img2.jpg" alt="Waiters" />
        </div>
        <div className="cards">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
