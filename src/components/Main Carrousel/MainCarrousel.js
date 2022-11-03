import { Swiper, SwiperSlide } from "swiper/react"
import { useQuery } from "react-query"
import { EffectCoverflow, Autoplay, } from "swiper"
import { CarrouselContainer, Image } from "./styles"
import MainCarrouselSkelet from "../Carrousel Skeleton/mainCarrouselSkeleton"
import { Link } from "react-router-dom"



export default function MainCarrousel() {
    async function getMainCarrouselMidia() {
        let randomPage = 0

        do {
            randomPage = Math.floor(Math.random() * 2)
        } while (randomPage === 0)

        const response = fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&page=1`)

        return (await response).json()
    }

    const { data, isLoading } = useQuery({ queryKey: ["mainCarrousel"], queryFn: getMainCarrouselMidia, refetchOnWindowFocus: false })

    const SkeletonData = [ "", "", "", ""]
    if (isLoading) return (
        <MainCarrouselSkelet midia={SkeletonData} />
    )

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
                {data &&
                    data.results.map((content) => (
                        <SwiperSlide key={content.id}>
                            <Link to={content.media_type === "tv" ? `/detalhes/${content.id}?type="tv"` : `/detalhes/${content.id}?type="movie"`}>
                                <Image alt={content.orginal_name || content.title || content.name} src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`} />
                            </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </CarrouselContainer>

    )
}