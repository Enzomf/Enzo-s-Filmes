import { Link } from "react-router-dom";
import { Navigation, Lazy } from "swiper";
import React, { memo } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import LazyLoad from "react-lazy-load";

import {
  Midiacard,
  Image,
  MidiaRating,
  SectionTitle,
  MidiaSection,
} from "./styles";
function ContentCarrousel({ content }) {
  return (
    <MidiaSection>
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
        {content.content.results.map((midia) => (
          <SwiperSlide key={midia.id} className="swiper-lazy">
            <Midiacard>
              <Link
                to={`/detalhes/${midia.id}?type="${
                  content.type || content.media_type
                }"`}
              >
                <LazyLoad height={250} offset={0.95}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${midia.poster_path}`}
                  />
                </LazyLoad>
                <MidiaRating> {midia.vote_average.toFixed(1)}</MidiaRating>
              </Link>
            </Midiacard>
          </SwiperSlide>
        ))}
      </Swiper>
    </MidiaSection>
  );
}

export default memo(ContentCarrousel);
