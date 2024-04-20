import React, { useState } from 'react';
import HeaderTop from './components/HeaderTop/HeaderTop';
import HeaderBottom from './components/HeaderBottom/HeaderBottom';
import './Header.scss';
import NavList from './components/NavList/NavList';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="header container">
      <div className="desktop">
        <HeaderTop />
        <HeaderBottom />
      </div>

      <div className="mobile">
        <div className="burger">
          <img src="/icons/header/burger-menu.svg" alt="Menu" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Header;
