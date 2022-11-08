import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query';

import axios_ from '../../axiosConfig';
import NavBar from "../../components/NavBar/Navbar"
import { Container, Content, GenresWrapper, ImageTop } from './styles';
import { useState } from 'react';

function Detalhes() {

    const midiaId = useParams();
    const [searchParams] = useSearchParams();
    const [trailer, setTrailer] = useState(null)

    async function getDetails() {
        const media_id = midiaId.id
        const media_type = searchParams.get("type")

        const data = {
            details: await (await axios_.get(`/${media_type}/${media_id}?language=pt-BR`)).data,
            trailer: await (await axios_.get(`/${media_type}/${media_id}/videos`)).data,
            casting: await (await axios_.get(`/${media_type}/${media_id}/credits`)).data,
            similars: await (await axios_.get(`/${media_type}/${media_id}/similar`)).data
        }
        console.log(data.trailer)

        setTrailer(data.trailer.results.filter(video => video.name.includes("Trailer")))


        return data
    }

    const { data, isLoading } = useQuery({ queryKey: "detalhes", refetchOnWindowFocus: false, queryFn: getDetails })




    if (isLoading) return <h1>dhsaldhsao</h1>

    return (
        data.details.id &&
        <>
            <div className='sm'><NavBar /></div>
            <Container>
                <ImageTop>
                    <img src={`https://image.tmdb.org/t/p/original/${data.details.backdrop_path}`} alt={data.details.name || data.details.title || data.original_name} />
                    <h1 > {data.details.name || data.details.title || data.original_name}</h1>
                </ImageTop>


                <Content>
                    <p>{data.details.overview}</p>

                    <GenresWrapper >
                        {data.details.genres.map((genre, index) => (
                            <span key={index} >{genre.name} <p>{data.details.genres.length === index + 1 ? null : "|"}</p></span>
                        ))}
                    </GenresWrapper>

                    {trailer ? (<iframe width="100%" height="250px" src={`https://www.youtube.com/embed/${trailer[0].key}?autoplay=1&showinfo=0`} title={data.details.original_name}>

                    </iframe>) : null

                    }
                </Content>
            </Container>
        </>


    )

}



export default Detalhes