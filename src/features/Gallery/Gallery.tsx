import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Gallery.scss';

const Gallery = () => {
  return (
    <div className="gallery-block">
      <div className="swiper">
        <h3 className="title">Фотогалерея</h3>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={50}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slider">
            <div className="img">
              <img src="/gallery/gallery-img4.jpg" alt="Gallery" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="img">
              <img src="/gallery/gallery-img1.jpg" alt="Gallery" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="img">
              <img src="/gallery/gallery-img2.jpg" alt="Gallery" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="img">
              <img src="/gallery/gallery-img3.jpg" alt="Gallery" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
