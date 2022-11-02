import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay, } from "swiper"
import { CarrouselContainer, Image } from "./styles"



export default function MainCarrousel({ midia }) {

    return (

        <CarrouselContainer >
            <Swiper
                slidesPerView={"auto"}
                effect={"coverflow"}
                centeredSlides={true}
                grabCursor={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    650: {
                        slidesPerView: 2.3,
                    }
                }}
                speed={3000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
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
                {
                    midia.map((content) => (
                        <SwiperSlide key={content.id}>
                            <a href={content.media_type === "tv" ? `/detalhes/${content.id}?type="tv"` : `/detalhes/${content.id}?type="movie"`}>
                                <Image alt={midia.orginal_name || midia.title} src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`} />
                            </a>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </CarrouselContainer>

    )
}