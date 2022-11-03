import { useQuery } from 'react-query';


import ContentCarrousel from '../../components/Content Carrousel/ContentCarrousel';
import Container from '../../components/Container/Container';
import CarrouselSkeleton from '../../components/Carrousel Skeleton/carroulselSkeleton';
import { AiFillFire } from "react-icons/ai"
import { MdOutlineRecommend } from "react-icons/md"
import { GiGingerbreadMan, GiTightrope, GiTomato } from "react-icons/gi"
import { BiLaugh } from "react-icons/bi"
import  {FaSearch} from "react-icons/fa"


function Series() {


    const SkeletonData = [
        {
            slug: "Em Alta",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Recomendados",
            type: "tv",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Ação",
            type: "movie",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Aventura",
            type: "tv",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Terror",
            type: "movie",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Comédia",
            type: "tv",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Documentários",
            type: "movie",
            content: ["", "", "", "", "", "", "", "", ""]
        },
    ]


    async function getSeries() {
        let response = [
            {
                slug: "Em Alta",
                icon: <AiFillFire />,
                type:"tv",
                content: await ((await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&page=2`)).json())
            },
            {
                slug: "Recomendados",
                icon: <MdOutlineRecommend />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`)).json()
            },
            {
                slug: "Melhores Avaliados",
                icon: <GiTomato />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&page=1`)).json()
            },
            {
                slug: "Ação e Aventura",
                icon: <GiTightrope />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=10759`)).json()
            },
            {
                slug: "Mistério",
                icon: <FaSearch />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=2&with_genres=9648`)).json()
            },
            {
                slug: "Comédia",
                type: "tv",
                icon: <BiLaugh />,
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=2&with_genres=35`)).json()
            },
            {
                slug: "Animação",
                icon: <GiGingerbreadMan />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=16`)).json()
            },
        ]

        return response
        // setHomeMidia(response)
    }



    const series = useQuery({ queryKey: ["series"], queryFn: getSeries, refetchOnWindowFocus: false })

    if (series.isLoading) return (
        <Container>

            <CarrouselSkeleton content={SkeletonData} />
        </Container>
    )

    return (
        <Container>
            {series.data && <ContentCarrousel content={series.data} />}
        </Container>
    )
}

export default Series