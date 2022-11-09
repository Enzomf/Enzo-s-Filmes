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
                <Swiper modules={[Navigation]} navigation={true} slidesPerView={"auto"} className="mySwiper" loop="true" spaceBetween={20}  >
                    {
                        section.content.map((_, index) => (
                            <SwiperSlide key={index} className="media">
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