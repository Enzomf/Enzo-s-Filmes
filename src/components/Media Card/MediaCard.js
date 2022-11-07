import { Link } from "react-router-dom"
import LazyLoad from "react-lazy-load"

import { MediaRating, MediaCardC, Image } from "./styles"

function MediaCard({ media, content, }) {

    return (
        media.poster_path|| media.profile_path? <MediaCardC>
            <Link
                to={`/detalhes/${media.id}?type="${content.media_type || content.media_type || media.media_type}"`}
            >
                <LazyLoad height={250} offset={0.95}>
                    <Image src={`https://image.tmdb.org/t/p/w300${media.poster_path|| media.profile_path}`}/>
                </LazyLoad>
                {media.vote_average &&<MediaRating> {media.vote_average.toFixed(1)}</MediaRating>}
            </Link>
        </MediaCardC>
        :null

       
    )
}

export default MediaCard