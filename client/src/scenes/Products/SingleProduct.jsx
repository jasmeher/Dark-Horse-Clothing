import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "components/Carousel/Carousel";
import React from "react";
import { useParams } from "react-router-dom";
import men from "static/men.jpg";
import collection from "static/collection.jpg";

const productImages = [men, collection];
const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const theme = useTheme();
  const isMediumScreens = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      width="100%"
      minHeight="90vh"
      display="grid"
      gridTemplateColumns="1fr 2fr"
      sx={{
        "& > div": { gridColumn: isMediumScreens ? "span 12" : undefined },
      }}
    >
      <Box>
        <Carousel
          images={productImages}
          imageStyles={{
            width: "100%",
            height: "30rem",
            position: "relative",
          }}
        />
      </Box>
      <Box
        padding="40px 20px"
        display="flex"
        flexDirection="column"
        gap="10px"
        sx={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}
      >
        <Typography variant="h1">Nike Full Sleeve T-SHIRT</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "uppercase", color: theme.palette.primary.main }}
        >
          IN STOCK
        </Typography>
        <Typography variant="h2">
          <Typography variant="dollar" sx={{ fontSize: "2.5rem" }}>
            ${" "}
          </Typography>
          29.99
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleProduct;
