function Series(){
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



    async function getHomeMidia() {
        let response = [
            {
                slug: "Em Alta",
                icon: <AiFillFire />,
                content: await ((await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4db00bcf6b586a0afd9fb29afa56fa26`)).json())
            },
            {
                slug: "Recomendados",
                icon: <MdOutlineRecommend />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=4db00bcf6b586a0afd9fb29afa56fa26`)).json()
            },
            {
                slug: "Ação",
                icon: <GiPistolGun />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=28`)).json()
            },
            {
                slug: "Aventura",
                icon: <GiTightrope />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=10759`)).json()
            },
            {
                slug: "Terror",
                icon: <RiKnifeBloodFill />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=27`)).json()
            },
            {
                slug: "Comédia",
                type: "tv",
                icon: <BiLaugh />,
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=35`)).json()
            },
            {
                slug: "Documentários",
                icon: <FiBookOpen />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=99`)).json()
            },
        ]

        return response
    }



    const homeMidia = useQuery({ queryKey: ["homeMidia"], queryFn: getHomeMidia, refetchOnWindowFocus: false })

    return(


    )
}


return Series