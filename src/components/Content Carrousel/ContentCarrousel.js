import { Navigation, Lazy } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import { SectionTitle, MediaSection } from "./styles";
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
        spaceBetween={20}
        loop={true}
 
    
      >
        {content.content.results.map((media) => (
          <SwiperSlide  key={media.id} className="media">
            <MediaCard content={content} media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MediaSection>
  );
}

export default ContentCarrousel
