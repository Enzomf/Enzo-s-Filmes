
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {AiOutlineArrowUp}from "react-icons/ai"


import axios_ from "../../axiosConfig";
import Container from "./styles";
import MediaCard from "../../components/Media Card/MediaCard";
import { Button } from "../../components/To Top/styled";

function Search() {
  const topRef = useRef();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(null)

  const executeScroll = () => topRef.current.scrollIntoView();

  async function getResults() {
      const query = searchParams.get("query");

    if (!query) {
      setResults([]);
      navigate("/home");
      return;
    }
 setPage(1)

    if (!query) {
      setResults([]);
      navigate("/home");
      return;
    }

    const results = await (
      await axios_.get(
        `/search/multi?query=${query}&language=pt-BR&page=${page}`
      )
    ).data;
    
      setTotalResults(results.total_results)
      setResults(results.results);
  
  }

  async function loadMoreResults(){
    const query = searchParams.get("query");
    if(page === 1 || page >totalResults) return null
    const results = await (
      await axios_.get(
        `/search/multi?query=${query}&language=pt-BR&page=${page}`
      )
    ).data;

    setResults((prev) => [...prev, ...results.results]);
    console.log(results);
  }

  const [searchParams] = useSearchParams();

  useEffect(() => {
    getResults();
  }, [searchParams]);

  useEffect(()=>{
    loadMoreResults()
  },[page])

  useEffect(() => {
    const observable = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
            setPage((prev)=> prev + 1)
      }
    });

    observable.observe(document.querySelector("#sentinela"));

    return () => observable.disconnect();
  },[]);
  console.log(results)

  if (results)
    return (
      <>
        <h2 ref={topRef}>
          Resultados para: <span>{searchParams.get("query")}</span>
        </h2>

        <Container>
          {results.map((result, index) => (
            <MediaCard key={index} media={result} />
          ))}

          <div id="sentinela" style={{ width: "20px", height: "20px" }}></div>
        </Container>
        <Button onClick={executeScroll} className="toTop"><AiOutlineArrowUp color="white"/></Button>
      </>
    );
  if (!results) return <h2>Pesquise por Filmes Series ou Pessoas</h2>;
}

export default Search;
