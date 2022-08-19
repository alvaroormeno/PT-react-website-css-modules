import React from 'react'
import styles from './Find.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card';

function Find() {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the worlds largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        breakpoints={{
          // when window width is >= 340px
          340: {
            width: 200,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
          // when window width is >= 1040px
          1040: {
            width: 1040,
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card></Card>
          </SwiperSlide>
        </Swiper>

      </div>

    </div>
  )
}

export default Find