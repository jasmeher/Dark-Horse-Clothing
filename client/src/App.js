import React from "react";
import theme from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "scenes/Layout/Layout";
import Home from "scenes/Home/Home";
import CustomCursor from "components/Custom/CustomCursor";
import LoaderPage from "scenes/LoaderPage/LoaderPage";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoaderPage />
        <div className="main">
          <Router>
            <CustomCursor />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
