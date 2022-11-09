import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom'

import axios_ from '../../axiosConfig';
import CastingCarrousel from '../../components/Casting Carrousel/CastingCarrousel';
import NavBar from "../../components/NavBar/Navbar"
import { Container, Content, GenresWrapper, ImageTop, InfoWrapper } from './styles';

function Detalhes() {

    const midiaId = useParams();
    const [searchParams] = useSearchParams();
    const [trailer, setTrailer] = useState([])

    async function getDetails() {
        const media_id = midiaId.id
        const media_type = searchParams.get("type")

        const data = {
            details: await (await axios_.get(`/${media_type}/${media_id}?language=pt-BR`)).data,
            trailer: await (await axios_.get(`/${media_type}/${media_id}/videos`)).data,
            casting: await (await axios_.get(`/${media_type}/${media_id}/credits`)).data,
            similars: await (await axios_.get(`/${media_type}/${media_id}/similar`)).data
        }
        console.log(data)

        setTrailer(data.trailer.results.filter(video => video.name.includes("Trailer")))


        return data
    }

    const { data, isLoading } = useQuery({ queryKey: "detalhes", refetchOnWindowFocus: false, queryFn: getDetails })




    if (isLoading) return (<h1>dhsaldhsao</h1>)

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

                    {trailer.length > 0 ? (<iframe width="100%" height="240px" allowFullScreen="1" contextMenu='1' src={`https://www.youtube.com/embed/${trailer[0].key}`} title={data.details.original_name} frameBorder="0">

                    </iframe>) : null

                    }


                    <h2 style={{ margin: ".5em 0 " }}>INFORMAÇÕES</h2>

                    <InfoWrapper>
                        <span>
                            <h4>NOME ORIGINAL</h4>
                           <p> {data.details.original_name || data.details.original_title}</p>
                        </span>
                        <span>
                            <h4>SITUAÇÃO</h4>
                            <p>{data.details.status}</p>
                        </span>
                        <span>
                            <h4>ESTREIA</h4>
                            <p>{new Date(data.details.first_air_date || data.details.release_date).getFullYear()}</p>
                        </span>
                        {data.details.networks && <span>
                            <h4>NETWORK</h4>
                            <img src={`https://image.tmdb.org/t/p/w200/${data.details.networks[0].logo_path}`} alt={data.details.networks[0].name} />
                        </span>
                        }
                    </InfoWrapper>


                    <h2 style={{ margin: ".5em 0 " }}>Casting</h2>

                    <CastingCarrousel casting={data.casting.cast} />

                    
                </Content>
            </Container>
        </>


    )

}



export default Detalhes