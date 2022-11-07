import { Outlet } from "react-router-dom";

import Container from "../components/Container/Container";
import Header from "../components/Header/Header";



function SecondaryLayout() {
   
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )


}

export default SecondaryLayout