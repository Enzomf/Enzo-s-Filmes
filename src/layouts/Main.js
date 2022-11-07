import { Outlet } from "react-router-dom";

import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import MainCarrousel from "../components/Main Carrousel/MainCarrousel";
import NavBar from "../components/NavBar/Navbar";


function MainLayout() {

    return (
        <>
            <Header />
            <Container>
                <MainCarrousel />
                <div className="sm">
                        <NavBar />
                </div>
                <Outlet />
            </Container>
        </>
    )


}

export default MainLayout