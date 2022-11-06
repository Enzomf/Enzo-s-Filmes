import { HeaderC, NavBar, SeachWrapper, SeachBar } from "./styles"
import { useState, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom"
import { Tab, Tabs } from "@mui/material"


export default function Header() {

    const path = window.location.pathname
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log(path)
        setValue(path.includes("home") ? 0 : path.includes("filmes") ? 1 : path.includes("series") ? 2 : null)
    }, [])

    return (
        <HeaderC>
            <a href={"/"}>
                <img src={logo} alt="logo" width="55" />
            </a>
            <NavBar>
                <Tabs sx={{
                    "& a": {
                        color: "#FFFF", fontFamily: "'Bebas Neue', cursive",
                        fontSize: "2em"
                    },
                    "& span.MuiTabs-indicator": {
                        background: "#FFFF",
                        height: "3px"
                    }

                }} value={value} onChange={(e, val) => { setValue(val) }} >
                    <Tab label="HOME" to='/home' component={Link} />
                    <Tab label="FILMES" to='/filmes' component={Link} />
                    <Tab label="SERIES" to='/series' component={Link} />
                </Tabs>
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