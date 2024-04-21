import React from 'react';
import './FooterTop.scss';

const FooterTop = () => {
  return (
    <div className="footer-top container">
      <a className="logo" href="/">
        <img src="/footer/logo.svg" alt="Bono" />
      </a>

      <div className="item">
        <h6 className="title">/ Адрес:</h6>
        <ul className="lists">
          <li className="list">
            <a className="link" href="/">
              карта 2гис
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Карта Google
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Доставка
            </a>
          </li>
        </ul>
      </div>

      <div className="item">
        <h6 className="title">/ Позвоните нам:</h6>
        <ul className="lists">
          <li className="list">
            <a className="link" href="tel:+996501065505">
              +996 501 06 55 05
            </a>
          </li>
          <li className="list">
            <a className="link" href="tel:+996501065505">
              +996 501 06 55 05
            </a>
          </li>
          <li className="list">
            <a className="link" href="tel:+996501065505">
              +996 501 06 55 05
            </a>
          </li>
        </ul>
      </div>

      <div className="item">
        <h6 className="title">/ Навигации по страницам:</h6>
        <ul className="lists">
          <li className="list">
            <a className="link" href="/">
              Главный экран
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              О нас
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Меню
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Контакты
            </a>
          </li>
          <li className="list">
            <a className="link" href="/">
              Бронь столика
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
