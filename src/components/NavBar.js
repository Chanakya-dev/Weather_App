import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";



const NavBar = () => {
  return (
    <AppBar position="static"color="secondary">
      <Toolbar onClick={() => window.location.reload()}>
        <Typography variant="h6">Weather App 🌦️</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
