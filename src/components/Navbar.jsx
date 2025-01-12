import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Product Management System
            </Typography>
            <Link to={'/'}><Button color="inherit" className="text-black">Home</Button> </Link>
            <Link to={'products'}><Button color="inherit" className="text-black">Products</Button></Link>
            <Link to={'form'}><Button color="inherit" className="text-black">Add Products</Button></Link>
            <Outlet/>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
