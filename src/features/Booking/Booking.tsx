import React from 'react';
import './Booking.scss';

const Booking = () => {
  return (
    <div className="booking-block">
      <div className="form-block container">
        <div className="inner">
          <form className="form">
            <div className="item">
              <label className="label" htmlFor="name">
                ФИО клиента
              </label>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="ФИО клиента"
                // value={}
                // onChange={}
                required
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="phone">
                Номер клиента
              </label>
              <input
                className="input"
                type="tel"
                name="pnone"
                id="phone"
                placeholder="+996 XX-XX-XX"
                // value={}
                // onChange={}
                required
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="hours">
                Время нахождения
              </label>
              <select className="select" id="hours" name="hours" required>
                <option selected disabled>
                  Время нахождения
                </option>
                <option value="one-hour">1 час</option>
                <option value="two-hours">2 часа</option>
                <option value="three-hours">3 часа</option>
                <option value="four-hours">4 часа</option>
                <option value="five-hours">5 часов</option>
                <option value="more-five-hours">более 5 часов</option>
              </select>
            </div>
            <div className="item">
              <label className="label" htmlFor="time">
                Время брони:
              </label>
              <input
                className="input"
                type="text"
                id="time"
                name="time"
                placeholder="Время брони"
                // value={}
                // onChange={}
                required
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="amount">
                Количество гостей:
              </label>
              <input
                className="input"
                type="text"
                id="amount"
                name="amount"
                placeholder="Количество гостей"
                // value={}
                // onChange={}
                required
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="comment">
                Комментарий
              </label>
              <textarea
                className="input"
                id="comment"
                name="comment"
                placeholder="Кoмментарий"
                // value={}
                // onChange={}
              />
            </div>
            <button className="button" type="submit">
              Забронировать стол
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
