import { CircularProgress } from "@mui/material"

import { LoadingContainer } from "./styles"

function Loader() {

    return (
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    )
}



export default Loader 