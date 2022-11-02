import { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

import { Midiacard, Image, MidiaRating, SectionTitle, MidiaSection } from "./styles"

export default function ContentCarrousel({ content }) {

    return (
        content.map((element, index )=> (
            <MidiaSection key={index}>
                <SectionTitle>{element.slug}</SectionTitle>
                <Swiper modules={[Navigation]} navigation={true} slidesPerView={"auto"} className="mySwiper" loop="true" breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    350: {
                        slidesPerView: 1.8
                    },

                    420: {
                        slidesPerView: 2.3
                    },
                    460: {
                        slidesPerView: 2.5
                    },
                    500: {
                        slidesPerView: 2.8
                    },
                    550: {
                        slidesPerView: 3.1
                    },
                    600: {
                        slidesPerView: 3.5
                    },
                    680: {
                        slidesPerView: 4.1
                    },
                    700: {
                        slidesPerView: 4.5
                    },
                    1080: {
                        slidesPerView: 8.5
                    }
                }} >
                    {
                        element.content.results.map(midia => (
                            <SwiperSlide key={midia.id}>

                                <Midiacard>
                                    <a href={`/detalhes/${midia.id}?type="${element.type || midia.media_type}"`}>
                                        <Image src={`https://image.tmdb.org/t/p/original/${midia.poster_path}`} />
                                        <MidiaRating> {midia.vote_average.toFixed(1)}</MidiaRating>
                                    </a>
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