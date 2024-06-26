import React, { useEffect, useState } from 'react';
import HeaderTop from './components/HeaderTop/HeaderTop';
import HeaderBottom from './components/HeaderBottom/HeaderBottom';
import './Header.scss';
import NavList from './components/NavList/NavList';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [hideMobileMenu, setHideMobileMenu] = useState(false);

  const TOP_OFFSET = 50;
  const HIDE_MENU_SCROLL = 6400;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }

      if (scrollY >= HIDE_MENU_SCROLL) {
        setHideMobileMenu(true);
      } else {
        setHideMobileMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setOpen(!open);

    document.body.style.overflow = open ? 'auto' : 'hidden';
  };

  return (
    <div className="header">
      <div
        className="desktop"
        style={{
          backgroundColor: showBackground ? '#111111' : 'inherit',
          display: hideMobileMenu ? 'none' : 'block',
        }}
      >
        <div className="border">
          <div className="container">
            <HeaderTop />
          </div>
        </div>
        <div className="container">
          <HeaderBottom />
        </div>
      </div>

      <div className="mobile">
        <div className="burger">
          <img src="/icons/header/burger-menu.svg" alt="Menu" onClick={handleMenuToggle} />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Header;
