import { useParams, useSearchParams } from 'react-router-dom'

function Detalhes() {

    const midiaId = useParams();
    const [searchParams] = useSearchParams();
    console.log( midiaId)
    console.log(searchParams.get("type"))

    return (
        <h1>Detalhes</h1>

    )

}



export default Detalhes