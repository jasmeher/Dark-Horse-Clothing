import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";

const LoaderPage = () => {
  const theme = useTheme();
  const isNonSmallScreens = useMediaQuery("(min-width: 576px)");
  const animationStart = () => {
    gsap.to(".text-wrapper > p", {
      x: isNonSmallScreens ? "500" : "100",
      ease: Expo.easeInOut,
      stagger: 0.1,
      duration: 1,
    });

    gsap.to(".text-wrapper", {
      y: -600,
      scale: 4.5,
      rotate: -90,
      ease: Expo.easeInOut,
      delay: 1.5,
      duration: 3,
    });

    gsap.to(".text", {
      opacity: 1,
      ease: Expo.easeInOut,
      delay: 3,
      duration: 1,
    });

    gsap.to(".text-wrapper > p", {
      x: "-3500",
      ease: Expo.easeInOut,
      delay: 3.5,
      stagger: 0.05,
      duration: 4,
    });

    gsap.to(".text-container", {
      bottom: "-100vh",
      ease: Expo.easeInOut,
      display: "none",
      delay: 6,
      duration: 2,
    });

    gsap.to(".text-container,.text-wrapper", {
      duration: 0.5,
      zIndex: -1,
      delay: 8,
    });
  };
  useEffect(() => {
    setTimeout(animationStart, 1000);
  }, []); // eslint-disable-line
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          background: theme.palette.primary.main,
          zIndex: "2",
        }}
        className="text-container"
      ></Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          left: "-50%",
          zIndex: "3",
        }}
        className="text-wrapper"
      >
        {[...Array(15)].map((element, index) => (
          <Typography
            sx={{
              width: "300%",
              fontSize: isNonSmallScreens ? "5vw" : "15vw",
              textTransform: "uppercase",
              fontFamily: "Bebas Neue",
              opacity: "0.125",
              color: theme.palette.background.main,
            }}
            className="text"
            key={index}
          >
            DARK HORSE CLOTHING DARK HORSE CLOTHING DARK HORSE CLOTHING DARK
            HORSE CLOTHING DARK HORSE CLOTHING DARK HORSE CLOTHING DARK HORSE
            CLOTHING
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default LoaderPage;
