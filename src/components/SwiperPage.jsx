import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          280: {
            width: 280,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            width: 640,
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="inner-slide">
            <p>Global Survey</p>
            <i className="fa-solid fa-laptop"></i>
            <p>Network System</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <p>Global Survey</p>
            <i className="fa-solid fa-laptop"></i>
            <p>Network System</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <p>Global Survey</p>
            <i className="fa-solid fa-laptop"></i>
            <p>Network System</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <p>Global Survey</p>
            <i className="fa-solid fa-laptop"></i>
            <p>Network System</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
