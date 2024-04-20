import React from 'react';
import NavList from '../NavList/NavList';
import './HeaderBottom.scss';

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <a className="logo" href="/">
        <img src="/header/logo.svg" alt="Bono" />
      </a>

      <div className="nav">
        <NavList />
      </div>
    </div>
  );
};

export default HeaderBottom;
