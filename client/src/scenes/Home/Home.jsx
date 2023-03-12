import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import collection from "static/collection.jpg";
import graffiti from "static/graffiti-1.png";
import crown from "static/crown.png";

const Home = () => {
  const isNonMediumScreens = useMediaQuery("(min-width: 900px)");
  const isNonSmallScreens = useMediaQuery("(min-width: 576px)");
  useEffect(() => {
    document.title = "DARK HORSE CLOTHING - HOME";
  }, []);
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
      >
        {/* IMAGE SECTION */}
        <Box
          sx={{
            backgroundImage: `url(${collection})`,
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            quaerat ducimus exercitationem error maxime, quia eum illum nesciunt
            id necessitatibus perferendis fuga excepturi! Deleniti, itaque?
            Deleniti, itaque?
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
            flexDirection: isNonSmallScreens ? "row" : "column",
          }}
        >
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
            <Typography variant="h1">STREETWEAR 90'S</Typography>
          </Box>
          <Button
            className="text-reset"
            variant="contained"
            size="large"
            sx={{ "&:hover": { cursor: "none" } }}
          >
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
              "&:hover": { cursor: "none" },
            }}
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
              "&:hover": { cursor: "none" },
            }}
            className="text-reset"
          >
            <ArrowForwardOutlined sx={{ fontSize: "70px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
