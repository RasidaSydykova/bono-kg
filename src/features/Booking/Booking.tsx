import React, { useState } from 'react';
import { IBooking } from '../../types';
import { toast } from 'react-toastify';
import './Booking.scss';

const Booking = () => {
  const [state, setState] = useState<IBooking>({
    name: '',
    phone: '',
    hours: '',
    time: '',
    amount: '',
    comment: '',
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(value);

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      hours: value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.name || !state.phone || !state.hours || !state.time || !state.amount) {
      toast.error('Пожалуйста, заполните все поля!');
      return;
    }

    setState(state);
    toast.success('Спасибо! В ближайшее время с вами свяжутся для подтверждения бронирования');
  };

  return (
    <div className="booking-block">
      <div className="form-block container">
        <h2 className="title">Бронирование столика</h2>
        <div className="inner">
          <form className="form" onSubmit={onFormSubmit}>
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
                value={state.name}
                onChange={inputChange}
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="phone">
                Номер клиента
              </label>
              <input
                className="input"
                type="tel"
                name="phone"
                id="phone"
                placeholder="+996 XX-XX-XX"
                value={state.phone}
                onChange={inputChange}
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="hours">
                Время нахождения
              </label>
              <select
                className="select"
                id="hours"
                name="hours"
                value={state.hours}
                onChange={selectChange}
              >
                <option value="">Время нахождения</option>
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
                value={state.time}
                onChange={inputChange}
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
                value={state.amount}
                onChange={inputChange}
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
                value={state.comment}
                onChange={inputChange}
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
