import React from "react";
import { useQuery } from "react-query";
import LazyLoad from "react-lazy-load";
import { BiLaugh } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { MdOutlineRecommend } from "react-icons/md";
import { GiGingerbreadMan, GiTightrope, GiTomato } from "react-icons/gi";

import axios_ from "../../axiosConfig";
import Container from "../../components/Container/Container";
import CarrouselSkeleton from "../../components/Carrousel Skeleton/carroulselSkeleton";
import ContentCarrousel from "../../components/Content Carrousel/ContentCarrousel";

function Series() {

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
    {
      slug: "Terror",
      type: "movie",
      content: ["", "", "", "", "", "", "", "", ""],
    },
    {
      slug: "Comédia",
      type: "tv",
      content: ["", "", "", "", "", "", "", "", ""],
    },
    {
      slug: "Documentários",
      type: "movie",
      content: ["", "", "", "", "", "", "", "", ""],
    },
  ];

  async function getSeries() {
    let response = [
      {
        slug: "Em Alta",
        icon: <AiFillFire />,
        type: "tv",
        content: await (await axios_.get("/tv/popular?page=2")).data
      },
      {
        slug: "Recomendados",
        icon: <MdOutlineRecommend />,
        type: "tv",
        content: await (await axios_.get("/discover/tv?sort_by=popularity.desc&page=1")).data
      },
      {
        slug: "Melhores Avaliados",
        icon: <GiTomato />,
        type: "tv",
        content: await (await axios_.get("/tv/top_rated")).data
      },
      {
        slug: "Ação e Aventura",
        icon: <GiTightrope />,
        type: "tv",
        content: await (await axios_.get("/discover/tv?page=2&with_genres=10759")).data
      },
      {
        slug: "Mistério",
        icon: <FaSearch />,
        type: "tv",
        content: await (await axios_.get("/discover/tv?&page=2&with_genres=9648")).data
      },
      {
        slug: "Comédia",
        type: "tv",
        icon: <BiLaugh />,
        content: await (await axios_.get("/discover/tv?page=2&with_genres=35")).data
      },
      {
        slug: "Animação",
        icon: <GiGingerbreadMan />,
        type: "tv",
        content: await (await axios_.get("/discover/tv?page=1&with_genres=16")).data
      },
    ];

    return response;
  }

  const series = useQuery({
    queryKey: ["series"],
    queryFn: getSeries,
    refetchOnWindowFocus: false,
  });

  if (series.isLoading)
    return (
      <Container>
        <CarrouselSkeleton content={SkeletonData} />
      </Container>
    );

  return (
    <Container>
      {series.data && (
        <>
          <ContentCarrousel content={series.data[0]} />
          <ContentCarrousel content={series.data[1]} />

          <LazyLoad offset={0.80}>
            <ContentCarrousel content={series.data[2]} />
          </LazyLoad>

          <LazyLoad offset={0.80}>
            <ContentCarrousel content={series.data[3]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={series.data[4]} />
          </LazyLoad>

          <LazyLoad offset={0.80}>
            <ContentCarrousel content={series.data[5]} />
          </LazyLoad>

          <LazyLoad offset={0.80}>
            <ContentCarrousel content={series.data[6]} />
          </LazyLoad>
        </>
      )}
    </Container>
  );
}

export default Series;
