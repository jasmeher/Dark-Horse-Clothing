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
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
