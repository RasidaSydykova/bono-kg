import React from 'react';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBottom from './components/FooterBottom/FooterBottom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <FooterTop />
      </div>
      <div className="bottom">
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
