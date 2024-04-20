import React from 'react';
import './NavList.scss';

const NavList = () => {
  return (
    <nav className="nav">
      <ul className="lists">
        <li className="list">
          <a className="link" href="/">
            Главная
          </a>
        </li>
        <li className="list">
          <a className="link" href="/">
            Меню
          </a>
        </li>
        <li className="list">
          <a className="link" href="/">
            Доставка
          </a>
        </li>
        <li className="list">
          <a className="link" href="/">
            О нас
          </a>
        </li>
        <li className="list">
          <a className="link" href="/">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
