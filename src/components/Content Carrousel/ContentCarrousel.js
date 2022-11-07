
import { Navigation, Lazy } from "swiper";
import React, { memo } from "react";

import { SwiperSlide, Swiper } from "swiper/react";


import {
  SectionTitle,
  MediaSection,
} from "./styles";
import MediaCard from "../Media Card/MediaCard";
function ContentCarrousel({ content }) {
  return (
    <MediaSection>
      <SectionTitle>
        {content.slug} {content.icon}
      </SectionTitle>
      <Swiper
        modules={[Navigation, Lazy]}
        grabCursor={true}
        navigation={true}
        slidesPerView={"auto"}
        className="mySwiper"
        spaceBetween={30}

        loop="true"
        lazy={true}
        preloadImages={false}
        on={{
          lazyImageReady: (swiper) => {
            console.log(swiper);
          },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
          },
          350: {
            slidesPerView: 1.5,
          },

          400: {
            slidesPerView: 1.6,
          },
          460: {
            slidesPerView: 2.1,
          },
          500: {
            slidesPerView: 2.3,
          },
          550: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 2.8,
          },
          680: {
            slidesPerView: 3.3,
          },
          800: {
            slidesPerView: 3.8,
          },
          900: {
            slidesPerView: 4.2,
          },
          1080: {
            slidesPerView: 5.3,
          },
          1300: {
            slidesPerView: 5.8,
          },
          1400: {
            slidesPerView: 6.2,
          },
          1500: {
            slidesPerView: 6.5,
          },
          1600: {
            slidesPerView: 6.8,
          },
          1700: {
            slidesPerView: 7.5,
          },
          1800: {
            slidesPerView: 7.5,
          },
        }}
      >
        {content.content.results.map((media) => (
          <SwiperSlide key={media.id} className="swiper-lazy">
           <MediaCard content={content} media={media} /> 
          </SwiperSlide>
        ))}
      </Swiper>
    </MediaSection>
  );
}

export default memo(ContentCarrousel);
