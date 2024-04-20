import React from 'react';
import './HeaderTop.scss';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="info-block">
        <a className="link phone" href="tel:+996501065505">
          +996 501 06 55 05
        </a>
        <a className="email link" href="mailto:bono51@gmail.com" target="_blank" rel="noreferrer">
          bono51@gmail.com
        </a>
      </div>

      <div className="info-block">
        <a
          className="link instagram"
          href="https://www.instagram.com/bono.bar.bishkek/"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
        <a
          className="link gis2"
          href="https://2gis.kg/bishkek/firm/70000001078846209"
          target="_blank"
          rel="noreferrer"
        >
          2Gis
        </a>
        <button className="button" type="button">
          Заказать
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
