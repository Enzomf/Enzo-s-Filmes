import React from "react";
import { useQuery } from "react-query";
import LazyLoad from "react-lazy-load";
import { AiFillFire } from "react-icons/ai";
import { RiKnifeBloodFill } from "react-icons/ri";
import { MdOutlineRecommend } from "react-icons/md";
import { BiLaugh, BiMoviePlay } from "react-icons/bi";
import { GiGingerbreadMan, GiTightrope, GiTomato } from "react-icons/gi";

import axios_ from "../../axiosConfig";
import Container from "../../components/Container/Container";
import ContentCarrousel from "../../components/Content Carrousel/ContentCarrousel";
import CarrouselSkeleton from "../../components/Carrousel Skeleton/carroulselSkeleton";

function Filmes() {
  const SkeletonData = [
    {
      slug: "Em Alta",
      content: ["", "", "", "", "", "", "", "", ""],
    },
    {
      slug: "Recomendados",
      type: "tv",
      content: ["", "", "", "", "", "", "", "", ""],
    },
    {
      slug: "Ação",
      type: "movie",
      content: ["", "", "", "", "", "", "", "", ""],
    },
    {
      slug: "Aventura",
      type: "tv",
      content: ["", "", "", "", "", "", "", "", ""],
    },
  ];

  async function getFilmes() {
    let response = [
      {
        slug: "Em Alta",
        icon: <AiFillFire />,
        type: "movie",
        content: await (await axios_.get("/movie/popular?")).data
      },
      {
        slug: "Recomendados",
        icon: <MdOutlineRecommend />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?sort_by=popularity.desc&page=2")).data
      },
      {
        slug: "Melhor Avaliados",
        icon: <GiTomato />,
        type: "movie",
        content: await (await axios_.get("/movie/top_rated?page=1")).data
      },
      {
        slug: "No ar",
        icon: <BiMoviePlay />,
        type: "movie",
        content: await (await axios_.get("/movie/now_playing?page=1")).data
      },
      {
        slug: "Aventura",
        icon: <GiTightrope />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?with_genres=12")).data
      },
      {
        slug: "Terror",
        icon: <RiKnifeBloodFill />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?with_genres=27")).data
      },
      {
        slug: "Comédia",
        type: "movie",
        icon: <BiLaugh />,
        content: await (await axios_.get("/discover/movie?with_genres=35&page=2")).data
      },
      {
        slug: "Animação",
        icon: <GiGingerbreadMan />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?with_genres=35&page=16")).data
      },
    ];

    return response;
    // setHomeMidia(response)
  }

  const filmes = useQuery({
    queryKey: ["filmes"],
    queryFn: getFilmes,
    refetchOnWindowFocus: false,
  });

  if (filmes.isLoading)
    return (
      <Container>
        <CarrouselSkeleton content={SkeletonData} />
      </Container>
    );

  return (
    <Container>
      {filmes.data && (
        <>
          <ContentCarrousel content={filmes.data[0]} />

          <ContentCarrousel content={filmes.data[1]} />

          <LazyLoad offset={0.80}>
            <ContentCarrousel content={filmes.data[2]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={filmes.data[3]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={filmes.data[4]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={filmes.data[5]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={filmes.data[6]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={filmes.data[7]} />
          </LazyLoad>
        </>
      )}
    </Container>
  );
}

export default Filmes;
