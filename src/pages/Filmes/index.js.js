import { useQuery } from 'react-query';


import ContentCarrousel from '../../components/Content Carrousel/ContentCarrousel';
import Container from '../../components/Container/Container';
import CarrouselSkeleton from '../../components/Carrousel Skeleton/carroulselSkeleton';
import { AiFillFire } from "react-icons/ai"
import { MdOutlineRecommend } from "react-icons/md"
import { GiGingerbreadMan, GiTightrope, GiTomato } from "react-icons/gi"
import { RiKnifeBloodFill } from "react-icons/ri"
import { BiLaugh, BiMoviePlay } from "react-icons/bi"


function Filmes() {


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


    async function getFilmes() {
        let response = [
            {
                slug: "Em Alta",
                icon: <AiFillFire />,
                content: await ((await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&page=1`)).json())
            },
            {
                slug: "Recomendados",
                icon: <MdOutlineRecommend />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&sort_by=popularity.desc&page=2`)).json()
            },
            {
                slug: "Melhor Avaliados",
                icon: <GiTomato />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&page=1`)).json()
            }
            ,
            {
                slug: "No ar",
                icon: <BiMoviePlay />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=en-US&page=1`)).json()
            },
            {
                slug: "Aventura",
                icon: <GiTightrope />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=12`)).json()
            },
            {
                slug: "Terror",
                icon: <RiKnifeBloodFill />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=2&with_genres=27`)).json()
            },
            {
                slug: "Comédia",
                type: "movie",
                icon: <BiLaugh />,
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=2&with_genres=35`)).json()
            },
            {
                slug: "Animação",
                icon: <GiGingerbreadMan />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=16`)).json()
            },
        ]

        return response
        // setHomeMidia(response)
    }



    const filmes = useQuery({ queryKey: ["filmes"], queryFn: getFilmes, refetchOnWindowFocus: false })

    if (filmes.isLoading) return (
        <Container>

            <CarrouselSkeleton content={SkeletonData} />
        </Container>
    )

    return (
        <Container>
            {filmes.data && <ContentCarrousel content={filmes.data} />}
        </Container>
    )
}

export default Filmes