import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi"


import NavBar from "../NavBar/Navbar";
import logo from "../../images/logo.svg";
import { HeaderC, SeachWrapper, } from "./styles";



function Header() {


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

      <SeachWrapper method="GET" target="/search">
        <TextField
          // placeholder="pesquise filmes ou series"
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
