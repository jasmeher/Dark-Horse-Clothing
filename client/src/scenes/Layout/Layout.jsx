import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "scenes/Navbar/Navbar";

const Layout = () => {
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      sx={{ minHeight: "100vh", backgroundColor: palette.background.main }}
    >
      <Box
        className="noise"
        width="100%"
        height="100vh"
        sx={{ position: "fixed", filter: "contrast(5)", opacity: "0.1" }}
      />
      <Navbar />

      <Outlet />
    </Box>
  );
};

export default Layout;
