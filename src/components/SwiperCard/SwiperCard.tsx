import React from 'react';
import './SwiperCard.scss';

const SwiperCard = () => {
  return (
    <div className="swiper-card">
      <span className="subtitle">Выделяесь среди других</span>
      <h1 className="title">
        <span>bono -</span> Коктейльный бар и ресторан приглашает к себе
      </h1>

      <button className="button" type="button">
        Забронировать стол
      </button>
    </div>
  );
};

export default SwiperCard;
