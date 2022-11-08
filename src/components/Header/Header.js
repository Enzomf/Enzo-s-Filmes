import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi"


import NavBar from "../NavBar/Navbar";
import logo from "../../images/logo.svg";
import { HeaderC, SeachWrapper, } from "./styles";

function Header() {

  const inputS = useRef(null)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search?query=${inputS.current.value}`)
    
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
              padding: "0"
            },

          }}
          type={"search"}
        />

        <button type="submit" className="search">
          <FiSearch color="#FFFF" />
        </button>
      </SeachWrapper>
    </HeaderC>
  );
}

export default Header;
