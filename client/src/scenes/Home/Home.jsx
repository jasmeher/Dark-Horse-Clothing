import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import HeroSection from "scenes/HeroSection/HeroSection";

const Home = () => {
  useEffect(() => {
    document.title = "DARK HORSE CLOTHING - HOME";
  }, []);
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />
      {/* DIVIDER */}
      <Box
        sx={{
          width: "100%",
          padding: "20px 0",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Marquee gradient={false} speed={150} style={{ overflow: "hidden" }}>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEW ARRIVALS
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEW ARRIVALS
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEW ARRIVALS
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEW ARRIVALS
          </Typography>
        </Marquee>
      </Box>
    </>
  );
};

export default Home;
