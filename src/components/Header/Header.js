import React from "react";
import { HeaderC, SeachWrapper, SeachBar } from "./styles";
import NavBar from "../NavBar/Navbar";
import { FaSearch } from "react-icons/fa";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderC>
      <div style={{display:"flex", alignItems:"center"}}>
        <Link to={"/"}>
          <img src={logo} alt="logo" width="55" />
        </Link>
        <div className="navbarPc">
        <NavBar />
          
        </div>
      </div>

      <SeachWrapper method="GET">
        <SeachBar
          type="search"
          placeholder="pesquise filmes ou series"
          name="search"
        />
        <button className="search">
          <FaSearch color="#FFFF" />
        </button>
      </SeachWrapper>
    </HeaderC>
  );
}

export default Header;
