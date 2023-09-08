"use client";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

function Carousal() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={photo1} alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo2} alt="2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo3} alt="3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousal;
