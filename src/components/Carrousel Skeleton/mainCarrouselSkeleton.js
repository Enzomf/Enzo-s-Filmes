import { EffectCoverflow, Autoplay } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"
import { Skeleton } from "@mui/material"
import { CarrouselContainer } from "../Main Carrousel/styles"


function MainCarrouselSkelet({midia}) {
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
                midia.map((_, index) => (
                    <SwiperSlide key={index}>
                        <Skeleton variant="rounded" sx={{ background: "#474A51", width: "100%", height: "100%" }} />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </CarrouselContainer>
}

export default MainCarrouselSkelet