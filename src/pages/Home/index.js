import React from "react";
import { useQuery } from "react-query";
import LazyLoad from "react-lazy-load";
import { BiLaugh } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import { AiFillFire } from "react-icons/ai";
import { RiKnifeBloodFill } from "react-icons/ri";
import { MdOutlineRecommend } from "react-icons/md";
import { GiPistolGun, GiTightrope } from "react-icons/gi";

import axios_ from "../../axiosConfig";
import Container from "../../components/Container/Container";
import ContentCarrousel from "../../components/Content Carrousel/ContentCarrousel";
import CarrouselSkeleton from "../../components/Carrousel Skeleton/carroulselSkeleton";


function Home() {
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

  async function getHomeMidia() {
    let response = [
      {
        slug: "Em Alta",
        icon: <AiFillFire />,
        content: await (await axios_.get("/trending/all/day")).data
  
      },
      {
        slug: "Recomendados",
        icon: <MdOutlineRecommend />,
        type: "tv",
        content: await (await axios_.get("/trending/tv/week")).data
      },
      {
        slug: "Ação",
        icon: <GiPistolGun />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?with_genres=28")).data
      },
      {
        slug: "Aventura",
        icon: <GiTightrope />,
        type: "tv",
        content: await (await axios_.get("/discover/movie?with_genres=10759")).data
      },
      {
        slug: "Terror",
        icon: <RiKnifeBloodFill />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?with_genres=27")).data
      },
      {
        slug: "Comédia",
        type: "tv",
        icon: <BiLaugh />,
        content:  await (await axios_.get("/discover/movie?with_genres=35")).data
      },
      {
        slug: "Documentários",
        icon: <FiBookOpen />,
        type: "movie",
        content: await (await axios_.get("/discover/movie?with_genres=99")).data
      },
    ];

    return response;
  }

  const homeMidia = useQuery({
    queryKey: ["homeMidia"],
    queryFn: getHomeMidia,
    refetchOnWindowFocus: false,
  });

  if (homeMidia.isLoading)
    return (
      <Container>
        <CarrouselSkeleton content={SkeletonData} />
      </Container>
    );

  return (
    <Container>
      {homeMidia.data && (
        <>
          <ContentCarrousel content={homeMidia.data[0]} />

          <ContentCarrousel content={homeMidia.data[1]} />

          <LazyLoad offset={0.80}>
            <ContentCarrousel content={homeMidia.data[2]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={homeMidia.data[3]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={homeMidia.data[4]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={homeMidia.data[5]} />
          </LazyLoad>
          <LazyLoad offset={0.80}>
            <ContentCarrousel content={homeMidia.data[6]} />
          </LazyLoad>
        </>
      )}
    </Container>
  );
}

export default Home;
