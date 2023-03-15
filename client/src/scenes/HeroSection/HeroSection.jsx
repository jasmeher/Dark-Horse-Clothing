import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import collection from "static/collection.jpg";
import collection2 from "static/collection2.jpg";
import graffiti from "static/graffiti-1.png";
import crown from "static/crown.png";
import React, { useState } from "react";
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";

const HeroSection = () => {
  const isNonMediumScreens = useMediaQuery("(min-width: 900px)");
  const isNonSmallScreens = useMediaQuery("(min-width: 576px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const collections = [
    {
      img: collection,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat ducimus exercitationem error maxime, quia eum illum nesciunt id necessitatibus perferendis fuga excepturi! Deleniti, itaque? Deleniti, itaque?",
      title: "STREETWEAR 90'S",
    },
    {
      img: collection2,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat ducimus exercitationem error maxime, quia eum illum nesciunt id necessitatibus perferendis fuga excepturi! Deleniti, itaque? Deleniti, itaque?",
      title: "70'S Style",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? collections.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const NextSlide = () => {
    const isLastSlide = currentIndex === collections.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? NextSlide() : prevSlide();
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <Box
        display="grid"
        minHeight="90vh"
        gridTemplateColumns="2fr 1fr"
        gridTemplateRows="2fr 1fr"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
          },
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* IMAGE SECTION */}
        <Box
          sx={{
            backgroundImage: `url(${collections[currentIndex].img})`,
            backgroundSize: "cover",
            filter: "grayscale(40%)",
            transition: "500ms ease",
            backgroundPosition: isNonMediumScreens ? "center 0%" : "center",
            "&:hover": { filter: "grayscale(0%)" },
          }}
        ></Box>
        {/* DESCRIPTION SECTION */}
        <Box
          sx={{
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            padding: "40px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={graffiti}
            alt="graffiti"
            sx={{
              position: "absolute",
              width: "260px",
              left: "50%",
              top: "40%",
              transform: "translate(-50%, -50%)",
              opacity: "0.6",
              display: isNonMediumScreens ? "block" : "none",
            }}
          />
          <Typography variant="body2" sx={{ opacity: "0.75" }}>
            {collections[currentIndex].desc}
          </Typography>
        </Box>
        {/* TITLE SECTION */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isNonSmallScreens ? "0 20px" : "20px 20px",
            border: isNonMediumScreens
              ? "0px"
              : "1px solid rgba(255,255,255,0.2)",
            flexDirection: isNonSmallScreens ? "row" : "column",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "5px",
              left: "20px",
              textTransform: "uppercase",
              display: isNonMediumScreens ? "block" : "none",
            }}
          >
            NIKE
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
          >
            <Box
              component="img"
              src={crown}
              alt="graffiti"
              sx={{
                position: "absolute",
                width: "60px",
                top: "-25px",
                right: "-40px",
                display: isNonMediumScreens ? "block" : "none",
                transform: "rotate(35deg)",
                filter:
                  "invert(70%) sepia(27%) saturate(3890%) hue-rotate(81deg) brightness(160%) contrast(93%)",
              }}
            />
            <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
              {collections[currentIndex].title}
            </Typography>
          </Box>
          <Button className="text-reset" variant="contained" size="large">
            VIEW COLLECTION
          </Button>
        </Box>
        {/* BUTTON SECTION */}
        <Box
          sx={{
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              background: "none",
              width: "50%",
              height: "100%",
              borderRadius: "0",
            }}
            onClick={prevSlide}
            className="text-reset"
          >
            <ArrowBackOutlined sx={{ fontSize: "70px" }} />
          </Button>
          <Button
            sx={{
              background: "none",
              width: "50%",
              height: "100%",
              borderRadius: "0",
              borderLeft: "1px solid rgba(255,255,255,0.2)",
            }}
            onClick={NextSlide}
            className="text-reset"
          >
            <ArrowForwardOutlined sx={{ fontSize: "70px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
