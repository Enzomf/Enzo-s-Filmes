import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";

import axios_ from "../../axiosConfig";
import { CarrouselContainer, Image } from "./styles";

export default function MainCarrousel() {

  async function getMainCarrouselMidia() {

    const response = await (await axios_.get("/trending/all/day?page=1")).data

    return response
  }

  const { data } = useQuery({
    queryKey: ["mainCarrousel"],
    queryFn: getMainCarrouselMidia,
    refetchOnWindowFocus: false,
  });

  return (
    <CarrouselContainer>
      <Swiper
        slidesPerView={"auto"}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={3}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          650: {
            slidesPerView: 2.3,
          },
        }}
        speed={3000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {data &&
          data.results.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={
                  content.media_type === "tv"
                    ? `/detalhes/${content.id}?type=tv`
                    : `/detalhes/${content.id}?type=movie`
                }
              >
                <Image
                  alt={content.orginal_name || content.title || content.name}
                  src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </CarrouselContainer>
  );
}
