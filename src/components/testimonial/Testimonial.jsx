import React from 'react';
import './testimonial.css';
import Avatar from '../../assests/about-image.png';
import kashif from '../../assests/kashif.jpeg';
// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={40}
        slidesPerView={1}
        effect='fade'
        Autoplay
        pagination={{ clickable: true }}
        className='container testimonial__container'>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={Avatar} />
          </div>
          <h5 className='client__name'>Abdul Mateen</h5>
          <small className='client__review'>
            Had an amazing experience in working wiht Muddasar.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={kashif} />
          </div>
          <h5 className='client__name'>Kashif Usman</h5>
          <small className='client__review'>
            Had a great experience in working with Muddasar.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
