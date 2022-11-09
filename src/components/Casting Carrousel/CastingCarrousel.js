import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import { Container } from "./styles"

function CastingCarrousel({ casting }) {

    return (
        <Container>
            <Swiper modules={Navigation} navigation={true} spaceBetween={10} draggable={true} slidesPerView={"auto"}>
                {
                    casting.map(member => (
                        member.profile_path && <SwiperSlide className="media">
                            <img src={`https://image.tmdb.org/t/p/original/${member.profile_path}`} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.character}</p>
                        
                        </SwiperSlide>
                    )
                    )
                }

            </Swiper>
        </Container>
    )
}


export default CastingCarrousel