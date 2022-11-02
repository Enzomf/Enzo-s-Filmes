import { useState, useEffect } from 'react';

import MainCarrousel from '../../components/Main Carrousel/MainCarrousel';
import ContentCarrousel from '../../components/Content Carrousel/ContentCarrousel';
import Container from '../../components/Container/Container';



function Home() {

    const [homeMidia, setHomeMidia] = useState([])
    const [carrouselMidia, setCarrouselMidia] = useState()
    async function getHomeMidia() {
        let response = [
            {
                slug: "Em Alta",
                content: await ((await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4db00bcf6b586a0afd9fb29afa56fa26`)).json())
            },
            {
                slug: "Recomendados",
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=4db00bcf6b586a0afd9fb29afa56fa26`)).json()
            },
            {
                slug: "Ação",
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=28`)).json()
            },
            {
                slug: "Aventura",
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=10759`)).json()
            },
            {
                slug: "Terror",
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=27`)).json()
            },
            {
                slug: "Comédia",
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=35`)).json()
            },
            {
                slug: "Documentários",
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=99`)).json()
            },
        ]

        setHomeMidia(response)
    }

    async function getMainCarrouselMidia() {
        let randomPage = 0

        do {
            randomPage = Math.floor(Math.random() * 2)
        } while (randomPage === 0)

        fetch(`https://api.themoviedb.org/4/list/8212499?page=${randomPage}&api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=pt-BR`).then(response => response.json()).then(data => {
            setCarrouselMidia(data)
        })

    }

    useEffect(() => {
        getHomeMidia()
        getMainCarrouselMidia()
    }, [])

    return (
        <Container>
           {carrouselMidia && <MainCarrousel midia={carrouselMidia.results} />}
           {homeMidia && <ContentCarrousel content={homeMidia} />}
        </Container>
    );
}

export default Home;
