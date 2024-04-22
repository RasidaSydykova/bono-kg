import React from 'react';
import './FooterBottom.scss';

const FooterBottom = () => {
  return (
    <div className="footer-bottom container">
      <p className="rights">© 2024 год, Bono bar . Все права защищены.</p>
      <div className="social-links">
        <a className="link" href="/" target="_blank" rel="noreferrer">
          <img src="/icons/footer/instagram.svg" alt="Instagram" />
        </a>
        <a className="link" href="/" target="_blank" rel="noreferrer">
          <img src="/icons/footer/telegram.svg" alt="Telegram" />
        </a>
        <a className="link" href="/" target="_blank" rel="noreferrer">
          <img src="/icons/footer/facebook.svg" alt="Facebook" />
        </a>
        <a className="link" href="/" target="_blank" rel="noreferrer">
          <img src="/icons/footer/tiktok.svg" alt="Tiktok" />
        </a>
        <a className="link" href="/" target="_blank" rel="noreferrer">
          <img src="/icons/footer/youtube.svg" alt="Youtube" />
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
