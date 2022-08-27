import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Styles from "./Slider.module.css";
import ButtonPlayer from "../../ButtonPlayer";

import Banner1 from "../../../Imgs/Banner1.jpg";
import Banner2 from "../../../Imgs/banner2.jpg";
import Banner3 from "../../../Imgs/banner3.jpg";
import Banner4 from "../../../Imgs/banner4.jpg";
import Banner5 from "../../../Imgs/banner5.jpg";

const Slider = () => {
  return (
    <section>
      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        navigation
        className={Styles.swiper_wrapper}
        loop="true"
      >
        <SwiperSlide className={Styles.Slider}>
          <img src={Banner4} alt="Banner1" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={Banner2} alt="Banner2" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={Banner3} alt="Banner3" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={Banner1} alt="Banner4" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={Banner5} alt="Banner5" />
        </SwiperSlide>
      </Swiper>
      <ButtonPlayer />
    </section>
  );
};

export default Slider;
