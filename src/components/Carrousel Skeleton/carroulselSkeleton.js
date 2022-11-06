import { Navigation } from "swiper"
import LazyLoad from "react-lazy-load"
import { Skeleton } from "@mui/material"
import { SwiperSlide, Swiper } from "swiper/react"

import { Midiacard, MidiaSection, SectionTitle } from "../Content Carrousel/styles"



function CarrouselSkeleton({ content }) {
    return (
        content.map((section, index) => (

            <MidiaSection key={index}>
                <SectionTitle>{section.slug}</SectionTitle>
                <Swiper modules={[Navigation]} navigation={true} slidesPerView={"auto"} className="mySwiper" loop="true" breakpoints={{
                    0: {
                        slidesPerView: 1.15,
                    },
                    350: {
                        slidesPerView: 1.5
                    },

                    400: {
                        slidesPerView: 1.6
                    },
                    460: {
                        slidesPerView: 2.1
                    },
                    500: {
                        slidesPerView: 2.3
                    },
                    550: {
                        slidesPerView: 2.5
                    },
                    600: {
                        slidesPerView: 2.8
                    },
                    680: {
                        slidesPerView: 3.3
                    },
                    800: {
                        slidesPerView: 3.8
                    },
                    900: {
                        slidesPerView: 4.2
                    }
                    ,

                    1080: {
                        slidesPerView: 5.3
                    },
                    1300: {
                        slidesPerView: 5.8
                    },
                    1400: {
                        slidesPerView: 6.2
                    },
                    1500: {
                        slidesPerView: 6.5
                    },
                    1600: {
                        slidesPerView: 6.8
                    },
                    1700: {
                        slidesPerView: 7.5
                    },
                    1800: {
                        slidesPerView: 7.5
                    },
                }} >
                    {
                        section.content.map((_, index) => (
                            <SwiperSlide key={index}>
                                <Midiacard>
                                    <Skeleton variant="rounded" sx={{ background: "#1C1C1C", width: "200px", height: "250px" }} />
                                </Midiacard>
                            </SwiperSlide>
                        ))

                    }
                </Swiper>
            </MidiaSection>


        ))
    )
}


export default CarrouselSkeleton