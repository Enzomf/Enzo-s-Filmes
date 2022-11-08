import { Outlet } from "react-router-dom";

import ContainerDet from "../components/Container/ContainerDet";
import Header from "../components/Header/Header";


function SecondaryLayout() {
   
    return (
        <>
            <Header />
            <ContainerDet>
                <Outlet />
            </ContainerDet>
        </>
    )


}

export default SecondaryLayout