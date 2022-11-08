import { Navigation } from "swiper"
import { Skeleton } from "@mui/material"
import { SwiperSlide, Swiper } from "swiper/react"

import { MediaSection, SectionTitle } from "../Content Carrousel/styles"
import { MediaCardC } from "../Media Card/styles"



function CarrouselSkeleton({ content }) {
    return (
        content.map((section, index) => (

            <MediaSection key={index}>
                <SectionTitle>{section.slug}</SectionTitle>
                <Swiper modules={[Navigation]} navigation={true} slidesPerView={"auto"} className="mySwiper" loop="true" spaceBetween={30} breakpoints={{
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
                                <MediaCardC>
                                    <Skeleton variant="rounded" sx={{ background: "#1C1C1C", width: "200px", height: "250px" }} />
                                </MediaCardC>
                            </SwiperSlide>
                        ))

                    }
                </Swiper>
            </MediaSection>


        ))
    )
}


export default CarrouselSkeleton