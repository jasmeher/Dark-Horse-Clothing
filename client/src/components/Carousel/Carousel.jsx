import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

const Carousel = ({ images, imageStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMediumScreens = useMediaQuery("(max-width: 768px)");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
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
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextSlide() : prevSlide();
  };
  const theme = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      gap="5px"
      flexDirection="column"
      padding={isMediumScreens ? "0 20px" : undefined}
      sx={{ position: "relative" }}
    >
      <Box
        sx={imageStyles}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(0%,-50%)",
            height: "100%",
            borderRadius: "0",
            transition: "400ms ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              opacity: "0.7",
            },
          }}
          onClick={prevSlide}
        >
          <ArrowBackOutlined />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translate(0%,-50%)",
            height: "100%",
            borderRadius: "0",
            transition: "400ms ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              opacity: "0.7",
            },
          }}
          onClick={nextSlide}
        >
          <ArrowForwardOutlined />
        </IconButton>
        <Box
          component="img"
          alt="product image"
          src={images[currentIndex]}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </Box>
      <Box display="flex">
        {images.map((image, index) => (
          <div>
            {index !== currentIndex && (
              <Box
                component="img"
                alt="other product images"
                src={image}
                key={index}
                sx={{
                  width: "7rem",
                  height: "10rem",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: "0.6",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentIndex(index)}
              />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
