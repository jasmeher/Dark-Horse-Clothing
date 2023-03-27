import React from "react";
import theme from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "scenes/Layout/Layout";
import Home from "scenes/Home/Home";
import CustomCursor from "components/Custom/CustomCursor";
import LoaderPage from "scenes/LoaderPage/LoaderPage";
import AllProducts from "scenes/Products/AllProducts";
import SingleProduct from "scenes/Products/SingleProduct";

const App = () => {
  return (
    <div className="app" id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoaderPage />
        <div className="main">
          <Router>
            <CustomCursor />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<AllProducts />} />
                <Route path="/product/:id" element={<SingleProduct />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
