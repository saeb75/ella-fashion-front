import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import img from "../../assents/slider/slider-2-co.webp";
import img2 from "../../assents/slider/slider-3-co.jpg";
import img3 from "../../assents/slider/banner-1-compressor_d582d4e6-0c00-4b1d-af4e-9ddd092c012a_1920x.jpg";
import img4 from "../../assents/slider/2.jpg";
import img5 from "../../assents/slider/3.jpg";
import img6 from "../../assents/slider/4.jpg";
import "swiper/components/pagination/pagination.scss";
import styled from "styled-components";
import { theme } from "../../Global";
import { BsStarFill } from "react-icons/bs";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const data = [
  {
    img: img,
  },
  {
    img: img3,
  },
  {
    img: img2,
  },
];
const MainSlider = () => {
  return (
    <div className="Cswiper mainSlider">
      <Swiper
        /*   breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
        }} */

        navigation
        pagination={{ clickable: true }}
        /*  pagination={{ clickable: true }} */
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.img}>
              <SlideContainer>
                <img src={item.img} style={{ width: "100%", height: "90%" }} />
              </SlideContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
const SlideContainer = styled.div`
  width: 100%;
`;
export default MainSlider;
