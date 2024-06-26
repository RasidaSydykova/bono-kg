import React from 'react';
import './Cards.scss';

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <h5 className="title cuisine">Кухня</h5>
        <p className="text">
          Современной кухни в Бишкеке с исключительным подходом к выбору продуктов. Минимум
          полуфабрикатов и максимум ручной работы: мы сами замешиваем тесто для пасты, варим сыры,
          выращиваем зелень и даже делаем свой тоник для коктейлей.
        </p>
      </div>
      <div className="card">
        <h5 className="title building">Заведения</h5>
        <p className="text">
          Два этажа заведения поделены на семейную зону с открытой кухней и коктейльную зону с
          барной стойкой, диджеем и просторной террасой.
        </p>
      </div>
      <div className="card">
        <h5 className="title booking">Бронирования</h5>
        <p className="text">
          Мы готовы Вам помочь с выбором необходимого для проведения мероприятия или встречи.
          Подберем для Вас и для Ваших гостей изысканное блюда которые буду соответствовать вашему
          мероприятию и приятное локация с видом на город.
        </p>
      </div>
    </div>
  );
};

export default Cards;
