import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { data } from "../../Data/SliderData";

import styled from "styled-components";
import { theme } from "../../Global";

import ListSliderCard from "./ListSliderCard";
const ListSlider = () => {
  const [productImg, setProductImg] = useState();
  return (
    <div className="list_slider py-5">
      <div className="Cswiper">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          navigation
          /*  pagination={{ clickable: true }} */
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <SlideContainer className="slideContainer">
                  <ListSliderCard item={item} />
                </SlideContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListSlider;

const SlideContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;
