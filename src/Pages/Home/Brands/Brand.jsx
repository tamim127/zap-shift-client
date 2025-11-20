import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazone from '../../../assets/brands/amazon.png'
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from 'swiper/modules';

const brands = [amazone,amazon_vector,casio,moonstar,randstad,star,start_people]


const Brand = () => {
    return (
      <section className='max-w-6xl mx-auto my-10'>
        <div>
          <h1 className=' text-center text-secondary font-extrabold text-2xl mb-10'>We've helped thousands of sales teams</h1>
        </div>
        <Swiper
          spaceBetween={30}
          loop={true}
          slidesPerView={4}
          grabCursor={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
                modules={[Autoplay]}
             
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={{ index }}>
              <img src={brand} alt="brands_logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Brand;
