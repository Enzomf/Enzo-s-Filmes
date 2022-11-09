import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";



import NavBar from "../NavBar/Navbar";
import logo from "../../images/logo.svg";
import { HeaderC, SeachWrapper, } from "./styles";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header() {

  const inputS = useRef(null)
  const navigate = useNavigate()
  const [display, setDisplay] = useState("none");

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search?query=${inputS.current.value}`)
  }
  function handleClick(){
    display === "none" ? setDisplay("block")  : setDisplay("none")
  }

  return (
    <HeaderC>
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <Link to={"/"}>
          <img src={logo} alt="logo" width="55" />
        </Link>
        <div className="lg-md">
          <NavBar />

        </div>
      </div>

      <SeachWrapper method="GET" onChange={handleSubmit}>
        <TextField
          inputRef={inputS}
          name="query"
          placeholder="Filmes, Series e Pessoas"
          variant="filled"
          color="primary"
          size="medium"
        
      
          sx={{
            ".css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after": {
              border: "#1976d2 2px solid"
            },
            input: {
              color: "#FFFF",
              fontFamily: "'Bebas Neue',cursive",
              fontSize: "2em",
              borderBottom: "#FFFF 3px solid",
              width: "100%",
              padding: "0",
              display: display,

            },
            "input::placeholder": {
              fontSize: "1.4rem",
              margin: "0 auto",
              width:"100%"
            },

          }}
          type={"search"}
        />
          <span className="icon" onClick={handleClick}>{display === "none"? <FaSearch  /> : <AiOutlineClose />}</span>
      </SeachWrapper >
    </HeaderC >
  );
}

export default Header;
