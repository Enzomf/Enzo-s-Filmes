import { Link } from "react-router-dom"
import { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

import { Midiacard, Image, MidiaRating, SectionTitle, MidiaSection } from "./styles"

export default function ContentCarrousel({ content }) {

    return (
        content.map((element, index )=> (
            <MidiaSection key={index}>
                <SectionTitle>{element.slug} {element.icon}</SectionTitle>
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
                    900:{
                        slidesPerView: 4.2
                    }
                    ,

                    1080: {
                        slidesPerView: 5.3
                    },
                    1300:{
                        slidesPerView: 5.8
                    },
                    1400:{
                        slidesPerView: 6.2
                    },
                    1500:{
                        slidesPerView: 6.5
                    },
                    1600:{
                        slidesPerView: 6.8
                    },
                    1700:{
                        slidesPerView: 7.5
                    },
                    1800:{
                        slidesPerView: 7.5
                    },
                }} >
                    {
                        element.content.results.map(midia => (
                            <SwiperSlide key={midia.id}>

                                <Midiacard>
                                    <Link to={`/detalhes/${midia.id}?type="${element.type || midia.media_type}"`}>
                                        <Image src={`https://image.tmdb.org/t/p/original/${midia.poster_path}`} />
                                        <MidiaRating> {midia.vote_average.toFixed(1)}</MidiaRating>
                                    </Link>
                                </Midiacard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </MidiaSection>
        ))

    )




}

/* <CarrouselContainer>
<Swiper navigation={true} modules={[Navigation]} slidesPerView={5} className="mySwiper">
    {

        content.map(midia => (
            <div>
                <h1>teste</h1>
            <SwiperSlide key={midia.id}>
                <Midiacard>
                    <Image src={`https://image.tmdb.org/t/p/original/${midia.poster_path}`} />
                    <MidiaRating>{midia.vote_average}</MidiaRating>
                </Midiacard>
            </SwiperSlide>
            </div>
        ))

    }


</Swiper>
</CarrouselContainer>
 */