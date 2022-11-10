import { Pagination } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import MediaCard from "../../components/Media Card/MediaCard";

import axios_ from "../../axiosConfig"
import Container from "./styles"

function Search() {

    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const topRef = useRef()
    const navigate = useNavigate()

    const executeScroll = () => topRef.current.scrollIntoView()
    function handlePaginationChange(e) {
        let p = e.target.innerText
        setPage(p)
        executeScroll()
    }

    async function getResults() {
        const query = searchParams.get("query")

        if (!query) {
            setResults([])
            navigate("/home")
            return
        }

        const results = await (await axios_.get(`/search/multi?query=${query}&language=pt-BR&page=${page}`)).data

        setResults(results)
    }

    const [searchParams] = useSearchParams();

    useEffect(() => {
        getResults()
    }, [searchParams, page])


    if (results.results) return (
        <>

            <h2 ref={topRef}>Resultados para: <span>{searchParams.get("query")}</span></h2>

            <Container>

                    {
                        results.results.map((result, index) => (
                            <MediaCard key={index} content={result} media={result} />

                        ))
                    }
            
            </Container>

            <div className="pagination">
                <Pagination count={results.total_pages} variant="outlined" color="primary" sx={{ button: { background: "#FFFF" }, div: { color: "#FFFF", fontWeight: "bold" } }} onChange={handlePaginationChange} />
            </div>

        </>
    )
    if (!results) return (
        <h2>Pesquise por Filmes Series ou Pessoas</h2>
    )



}

export default Search