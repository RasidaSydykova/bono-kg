import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCard from '../../components/SwiperCard/SwiperCard';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="img-block">
        <img src="/main/main-img.jpg" alt="Main" />
      </div>

      <div className="swiper-block container">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide className="slide">
            <SwiperCard />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <SwiperCard />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <SwiperCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
