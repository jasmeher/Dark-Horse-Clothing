import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import graffiti1 from "static/graffiti-1.png";
import graffiti2 from "static/graffiti-2.png";
import crown from "static/crown.png";

const Home = () => {
  const isMediumDevice = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      display="grid"
      margin="20px"
      gap="20px"
      gridTemplateColumns="repeat(12,1fr)"
      sx={{
        "& > div": {
          gridColumn: isMediumDevice ? "span 12" : undefined,
        },
        minHeight: "fit-content",
      }}
    >
      <Box
        gridColumn="span 5"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        minHeight="90vh"
        gap="25px"
        sx={{ position: "relative" }}
      >
        <Typography
          variant="body1"
          sx={{
            opacity: "0.6",
            letterSpacing: "3px",
            position: "absolute",
            top: "20px",
            zIndex: "0",
          }}
        >
          NEW ARRIVALS
        </Typography>
        <Box
          component="img"
          src={graffiti1}
          sx={{
            position: "absolute",
            top: "20px",
            left: "40px",
            opacity: "0.4",
            width: "500px",
            zIndex: "0",
          }}
        />

        <Box sx={{ zIndex: "1", position: "relative" }}>
          <Box
            component="img"
            src={crown}
            sx={{
              position: "absolute",
              top: "-50px",
              left: "-10px",
              width: "70px",
              zIndex: "1",
              filter:
                "invert(70%) sepia(27%) saturate(3890%) hue-rotate(81deg) brightness(150%) contrast(93%)",
              transform: "rotate(-35deg)",
            }}
          />
          <Typography variant="h1">PRODUCT NAME</Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{ zIndex: "1", display: "flex", alignItems: "center" }}
        >
          <Typography variant="dollar" sx={{ fontSize: "1.5rem", mr: "5px" }}>
            $
          </Typography>
          59.99
        </Typography>
        <Box display="flex" alignItems="center" gap="30px">
          <Button variant="contained" size="large" sx={{ zIndex: "1" }}>
            ADD TO CART
          </Button>
          <Button variant="outlined" size="large" sx={{ zIndex: "1" }}>
            VIEW
          </Button>
        </Box>
      </Box>
      <Box
        gridColumn="span 7"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        minHeight="90vh"
        gap="25px"
        sx={{ position: "relative" }}
      >
        <Box
          component="img"
          src={graffiti2}
          sx={{
            position: "absolute",
            top: "20px",
            right: "40px",
            opacity: "0.4",
            width: "500px",
            zIndex: "0",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
