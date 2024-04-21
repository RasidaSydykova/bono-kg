import React from 'react';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts-block container">
      <div className="img-block">
        <img src="/contacts/contacts-block-img.jpg" alt="Contacts" />
      </div>

      <div className="text-block">
        <div className="inner">
          <h5 className="title">Мы открыты с 10:00 до 02:00</h5>
          <p className="text">
            Работаем в будни и выходные дни с 10:00 до 02:00. Бронируйте столики по телефону:
            <a href="tel:+9960220140866">+996 0220140866</a>
            <a href="tel:+9960220140866">+996 0220140866</a>
          </p>
        </div>

        <div className="inner">
          <h5 className="title">С нетерпением ждем вас</h5>
          <p className="text">
            на улице Сухэ-Батора, 17 6-й мк-р, Октябрьский район, столица Бишкек,
          </p>
        </div>

        <div className="inner">
          <a
            className="link instagram"
            href="https://www.instagram.com/bono.bar.bishkek/"
            target="_blank"
            rel="noreferrer"
          >
            @bono.bar.bishkek
          </a>
          <a
            className="link gis2"
            href="https://2gis.kg/bishkek/firm/70000001078846209"
            target="_blank"
            rel="noreferrer"
          >
            2Gis <span>ссылка на 2гис</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
