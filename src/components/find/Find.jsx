import React from 'react'
import styles from './Find.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Ally } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'

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

      </div>

    </div>
  )
}

export default Find