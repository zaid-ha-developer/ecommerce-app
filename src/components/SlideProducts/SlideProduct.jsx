import React from 'react';
import Product from './Product';
import './SlideProduct.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

function SlideProduct({ title, data }) {
  return (
    <div className='slide-products slide'>
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, laboriosam.</p>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="products-swiper"
          // حطينا مسافة عامة للموبايل، والباقي بتاخده الـ breakpoints
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4, // ★ قللنا العرض عشان الصور ما تصير صغيرة جداً
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5, // ★ بدل 6 خليها 5 عشان تعطي تنفس للشاشة
              spaceBetween: 35, // ★ زودنا المسافة بينهم
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;