import { NavBarC } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";

function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const [value, setValue] = useState(
    path.includes("home") ? 0 : path.includes("filmes") ? 1 : path.includes("series")?2: path.includes("search") || path.includes("detalhes")? undefined : undefined
  );

  useEffect(() => {
      setValue(  path.includes("home") ? 0 : path.includes("filmes") ? 1 : path.includes("series")?2: path.includes("search") || path.includes("detalhes")? undefined : undefined)
  }, [path])
  

  return (
    <NavBarC>
      <Tabs
        sx={{
          "& a": {
            color: "#FFFF",
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "2em",
          },
          "& span.MuiTabs-indicator": {
            background: "#FFFF",
            height: "3px",
          },
        }}
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <Tab
          label="HOME"
          to="/home"
          component={Link}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        />
        <Tab
          label="FILMES"
          to="/filmes"
          component={Link}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        />
        <Tab
          label="SERIES"
          to="/series"
          component={Link}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        />
      </Tabs>
    </NavBarC>
  );
}

export default NavBar;
