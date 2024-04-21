import React from 'react';
import MenuCards from '../../components/MenuCard/MenuCards';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu-block container">
      <h2 className="title">Меню</h2>
      <div>
        <MenuCards />
      </div>
    </div>
  );
};

export default Menu;
