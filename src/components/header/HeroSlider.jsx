import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay , Pagination } from "swiper/modules";
import { Link } from "react-router-dom";


function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows Xp/10/7/Pc3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero1.jpg" alt="slider hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>MINI-X6U SPEAKER</h4>
                <h3>
                  Led Bluetooth <br /> Speaker Lamp
                </h3>
                <p>upport 3.5 mm jack audio input</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero2.jpg" alt="slider hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>NEW ARRIVAL</h4>
                <h3>
                 Xiaomi Air 75 <br /> Earbuds
                </h3>
                <p>AAC HD Sound Quality</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero3.jpg" alt="slider hero 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
