import React from "react";
import "../styles/Mobile__Favourite.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

function Mobile__Favourites() {
  return (
    <div className="mobile__favourite">
      <div className="mobile__favourite__head">Most Popular</div>
      <div className="mobile__favourite__content">
        <Swiper
          className='mobile__swiper'
          slidesPerView={2}
          spaceBetween={15}
          
        >
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='mobile__fav'>
              <div className='mobile__fav__image'></div>
              <div className='mobile__fav__info'>
                  <div className='mobile__fav__name'>Red Velvet</div>
                  <div className='mobile__fav__price'>$245</div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Mobile__Favourites;
