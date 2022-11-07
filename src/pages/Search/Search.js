import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import MediaCard from "../../components/Media Card/MediaCard";
import { useQuery } from "react-query"
import { Pagination } from "@mui/material";

import axios_ from "../../axiosConfig"


function Search() {

    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const topRef = useRef()

    const executeScroll = () => topRef.current.scrollIntoView()    
    function handlePaginationChange(e) {
        
        setPage(Number(e.target.innerText))
        executeScroll()
    }

    async function getResults() {
        const query = searchParams.get("query")
        const results = await (await axios_.get(`/search/multi?query=${query}&language=pt-BR&page=${page}`)).data
        console.log(results)
        setResults(results)
    }

    const [searchParams] = useSearchParams();

    useEffect(() => {
        getResults()
        console.log(results)
    }, [searchParams, page])


    if (results.results) return (
        <>

        <h2 ref={topRef}>Resultados para: {searchParams.get("query")}</h2>

            <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", height: "100%", justifyContent: "center" }}>
                {
                    results.results.map((result, index) => (
                        <MediaCard key={index} content={result} media={result} />

                    ))}

            </div>

            <div className="pagination">
                <Pagination variant="text" sx={{ button: { background: "#1976d2" } }} color="primary" shape="rounded" count={results.total_pages} page={page} onChange={handlePaginationChange} />
            </div>

        </>
    )



}

export default Search