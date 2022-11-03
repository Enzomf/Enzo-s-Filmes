import { HeaderC, NavBar, NavBarItems, NavBarItem, Indicator, SeachWrapper, SeachBar } from "./styles"
import { useState, useRef, React } from "react"
import { FaSearch } from "react-icons/fa"
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom"



export default function Header() {

    let path = window.location.pathname

    const [indicatorPosition, setIndicatorPosition] = useState();
    const [indicatorWidth, setIndicatorWidth] = useState();

    const navElement = useRef();

    function handleClick(e) {

        const linkLeft = e.target.getBoundingClientRect().left;
        const navLeft = navElement.current.getBoundingClientRect().left;
        const linkWidth = e.target.getBoundingClientRect().width;
        const singleLinkWidth = linkWidth;
        const singleLinkLeft = linkLeft - navLeft;

        setIndicatorPosition(singleLinkLeft);
        setIndicatorWidth(singleLinkWidth);

        document.querySelectorAll(".nav_link").forEach(link => {
            link.classList.remove("active")
        })
        e.target.classList.add("active")

    }



    return (
        <HeaderC>
            <a href={"/"}>
                <img src={logo} alt="logo" width="55" />
            </a>
            <NavBar>
                <NavBarItems ref={navElement}>
                    <NavBarItem><Link to="/" className={`nav_link ${path.includes("") ? "active" : undefined}`} onClick={handleClick}>HOME</Link></NavBarItem>
                    <NavBarItem><Link to="/filmes" className={`nav_link ${path.includes("filmes") ? "active" : undefined}`} onClick={handleClick}>FILMES</Link></NavBarItem>
                    <NavBarItem><Link to="/series" className={`nav_link ${path.includes("series") ? "active" : undefined}`} onClick={handleClick}>SERIES</Link></NavBarItem>
                    <Indicator left={indicatorPosition} width={indicatorWidth} />
                </NavBarItems>
            </NavBar>

            <SeachWrapper method="GET">
                <SeachBar type="search" placeholder="pesquise filmes ou series" name="search" />
                <button className="search">
                    <FaSearch color="#FFFF" />
                </button>
            </SeachWrapper>
        </HeaderC>
    )
}