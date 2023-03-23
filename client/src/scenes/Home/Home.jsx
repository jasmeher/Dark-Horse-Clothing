import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Card from "components/Card/Card";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import HeroSection from "scenes/Home/HeroSection";
import men from "static/men.jpg";
import women from "static/women.jpg";
import collection from "static/collection.jpg";
import category from "static/category.png";
import categoryW from "static/category-w.png";
import categoryM from "static/category-m.png";
import about from "static/about.png";
import gsap, { Expo } from "gsap";
import Footer from "scenes/Footer/Footer";

const Home = () => {
  const [naIndex, setNaIndex] = useState(0);
  const [bsIndex, setBsIndex] = useState(0);
  const [hover, setHover] = useState(null);
  const isNonMediumScreens = useMediaQuery("(min-width: 900px)");
  const isNonMediumScreensImg = useMediaQuery("(min-width: 768px)");
  const isNonSmallScreens = useMediaQuery("(min-width: 576px)");
  const products = [
    {
      name: "Product Name1",
      price: 43,
      img: men,
    },
    {
      name: "Product Name2",
      price: 43,
      img: women,
    },
    {
      name: "Product Name3",
      price: 43,
      img: collection,
    },
    {
      name: "Product Name4",
      price: 43,
      img: women,
    },
    {
      name: "Product Name5",
      price: 43,
      img: collection,
    },
    {
      name: "Product Name6",
      price: 43,
      img: men,
    },
    {
      name: "Product Name7",
      price: 43,
      img: women,
    },
    {
      name: "Product Name8",
      price: 43,
      img: women,
    },
  ];
  const slideFadeOut = (className) => {
    gsap.to(className, {
      duration: 1,
      y: -20,
      opacity: 0,
      ease: Expo.easeInOut,
      stagger: 0.05,
    });
  };

  const slideFadeIn = (className) => {
    gsap.to(className, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: Expo.easeInOut,
      stagger: 0.1,
    });
  };
  const nextSlide = (index, setIndex, className) => {
    slideFadeOut(className);
    const isLastSlide = index + 3 === products.length - 1;

    const newIndex = isLastSlide ? 0 : index + 4;
    setTimeout(() => {
      setIndex(newIndex);
      slideFadeIn(className);
    }, 1000);
  };
  const prevSlide = (index, setIndex, className) => {
    slideFadeOut(className);
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? products.length - 4 : index - 4;
    setTimeout(() => {
      setIndex(newIndex);
      slideFadeIn(className);
    }, 1000);
  };
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
          padding: "20px 20px",
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
      {/* NEW ARRIVALS SECTION */}
      <Box
        sx={{
          width: "100%",
          minHeight: "90vh",
          padding: "30px 0",
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom="20px"
          padding="0 20px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="40px"
          >
            <Button
              variant="contained"
              onClick={() => {
                prevSlide(naIndex, setNaIndex, ".newArrivals-anim");
              }}
            >
              <ArrowBackOutlined />
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                nextSlide(naIndex, setNaIndex, ".newArrivals-anim");
              }}
            >
              <ArrowForwardOutlined />
            </Button>
          </Box>
        </Box>
        <Box
          display="grid"
          minHeight="75vh"
          gridTemplateColumns="1fr 2fr"
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            "& > div": {
              gridColumn: isNonMediumScreens ? undefined : "span 12",
            },
          }}
        >
          {/* FIRST HALF */}
          <Box
            sx={{
              padding: "40px 20px",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              borderLeft: isNonMediumScreens
                ? "0px"
                : "1px solid rgba(255,255,255,0.2)",
              borderRight: isNonMediumScreens
                ? "0px"
                : "1px solid rgba(255,255,255,0.2)",
            }}
            display="flex"
            justifyContent="center"
            minHeight="75vh"
            maxHeight="75vh"
          >
            <Card
              width="80%"
              height="100%"
              name={products[naIndex].name}
              price={products[naIndex].price}
              img={products[naIndex].img}
              classIdentifier={"newArrivals-anim"}
            />
          </Box>

          {/* SECOND HALF */}
          <Box
            sx={{
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              "& > div": {
                gridColumn: isNonSmallScreens ? undefined : "span 12",
              },
            }}
            display="grid"
            gridTemplateColumns="repeat(3,1fr)"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: "40px 20px",
                borderBottom: isNonSmallScreens
                  ? "0px"
                  : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Card
                width="80%"
                height="100%"
                name={products[naIndex + 1].name}
                price={products[naIndex + 1].price}
                img={products[naIndex + 1].img}
                classIdentifier={"newArrivals-anim"}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                borderLeft: "1px solid rgba(255,255,255,0.2)",
                padding: "40px 20px",
                borderBottom: isNonSmallScreens
                  ? "0px"
                  : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Card
                width="80%"
                height="100%"
                name={products[naIndex + 2].name}
                price={products[naIndex + 2].price}
                img={products[naIndex + 2].img}
                classIdentifier={"newArrivals-anim"}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                borderLeft: "1px solid rgba(255,255,255,0.2)",
                padding: "40px 20px",
              }}
            >
              <Card
                width="80%"
                height="100%"
                name={products[naIndex + 3].name}
                price={products[naIndex + 3].price}
                img={products[naIndex + 3].img}
                classIdentifier={"newArrivals-anim"}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "10px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
          display="flex"
          justifyContent="center"
        >
          <Button variant="contained" sx={{ borderRadius: "0", width: "50%" }}>
            VIEW ALL
          </Button>
        </Box>
      </Box>
      {/* DIVIDER */}
      <Box
        sx={{
          width: "100%",
          padding: "20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Marquee gradient={false} speed={150} style={{ overflow: "hidden" }}>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            BEST SELLING
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            BEST SELLING
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            BEST SELLING
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            BEST SELLING
          </Typography>
        </Marquee>
      </Box>
      {/* BEST SELLING SECTION */}
      <Box sx={{ width: "100%", minHeight: "90vh", padding: "30px 0" }}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom="20px"
          padding="0 20px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="40px"
          >
            <Button
              variant="contained"
              onClick={() => {
                prevSlide(bsIndex, setBsIndex, ".bestSelling-anim");
              }}
            >
              <ArrowBackOutlined />
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                nextSlide(bsIndex, setBsIndex, ".bestSelling-anim");
              }}
            >
              <ArrowForwardOutlined />
            </Button>
          </Box>
        </Box>
        <Box
          display="grid"
          minHeight="75vh"
          gridTemplateColumns="1fr 2fr"
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            "& > div": {
              gridColumn: isNonMediumScreens ? undefined : "span 12",
            },
          }}
        >
          {/* FIRST HALF */}
          <Box
            sx={{
              padding: "40px 20px",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              borderLeft: isNonMediumScreens
                ? "0px"
                : "1px solid rgba(255,255,255,0.2)",
              borderRight: isNonMediumScreens
                ? "0px"
                : "1px solid rgba(255,255,255,0.2)",
            }}
            display="flex"
            justifyContent="center"
            minHeight="75vh"
            maxHeight="75vh"
          >
            <Card
              width="80%"
              height="100%"
              name={products[bsIndex].name}
              price={products[bsIndex].price}
              img={products[bsIndex].img}
              classIdentifier="bestSelling-anim"
            />
          </Box>

          {/* SECOND HALF */}
          <Box
            sx={{
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              "& > div": {
                gridColumn: isNonSmallScreens ? undefined : "span 12",
              },
            }}
            display="grid"
            gridTemplateColumns="repeat(3,1fr)"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: "40px 20px",
                borderBottom: isNonSmallScreens
                  ? "0px"
                  : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Card
                width="80%"
                height="100%"
                name={products[bsIndex + 1].name}
                price={products[bsIndex + 1].price}
                img={products[bsIndex + 1].img}
                classIdentifier="bestSelling-anim"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                borderLeft: "1px solid rgba(255,255,255,0.2)",
                padding: "40px 20px",
                borderBottom: isNonSmallScreens
                  ? "0px"
                  : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Card
                width="80%"
                height="100%"
                name={products[bsIndex + 2].name}
                price={products[bsIndex + 2].price}
                img={products[bsIndex + 2].img}
                classIdentifier="bestSelling-anim"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                borderLeft: "1px solid rgba(255,255,255,0.2)",
                padding: "40px 20px",
              }}
            >
              <Card
                width="80%"
                height="100%"
                name={products[bsIndex + 3].name}
                price={products[bsIndex + 3].price}
                img={products[bsIndex + 3].img}
                classIdentifier="bestSelling-anim"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "10px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" sx={{ borderRadius: "0", width: "50%" }}>
            VIEW ALL
          </Button>
        </Box>
      </Box>
      {/* DIVIDER */}
      <Box
        sx={{
          width: "100%",
          padding: "20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Marquee gradient={false} speed={150} style={{ overflow: "hidden" }}>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            SHOP FOR
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            SHOP FOR
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            SHOP FOR
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            SHOP FOR
          </Typography>
        </Marquee>
      </Box>
      {/* SHOP FOR SECTION */}
      <Box sx={{ width: "100%", minHeight: "90vh" }}>
        <Box
          display="grid"
          gridTemplateColumns="1fr 2fr"
          minHeight="90vh"
          sx={{
            "& > div": {
              gridColumn: isNonMediumScreensImg ? undefined : "span 12",
            },
          }}
        >
          <Box
            minHeight="90vh"
            padding="0 20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="20px"
            position="relative"
          >
            <Box
              component="img"
              alt="gender image"
              src={category}
              sx={{
                position: "absolute",
                opacity: "0.2",
                filter: "grayscale(1) contrast(1.1)",
                bottom: "0%",
                left: "50%",
                transform: "translate(-50%,0%)",
                width: "95%",
                display: isNonMediumScreensImg ? "none" : "block",
              }}
            />
            <Typography sx={{ textAlign: "center" }}>
              Shop for stylish and trendy clothing items suitable for Men,
              Women, and Unisex apparel, featuring versatile designs and
              high-quality materials to fit a diverse range of fashion
              preferences.
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="20px"
            >
              <Button
                variant="contained"
                onMouseOver={() => setHover("men")}
                onMouseLeave={() => setHover(null)}
              >
                MEN
              </Button>
              <Button
                variant="contained"
                onMouseOver={() => setHover("women")}
                onMouseLeave={() => setHover(null)}
              >
                WOMEN
              </Button>
              <Button
                variant="contained"
                onMouseOver={() => setHover("unisex")}
                onMouseLeave={() => setHover(null)}
              >
                UNISEX
              </Button>
            </Box>
          </Box>
          <Box
            minHeight="90vh"
            display={isNonMediumScreensImg ? "flex" : "none"}
            justifyContent="center"
            alignItems="flex-end"
            sx={{
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              position: "relative",
            }}
          >
            <Box
              component="img"
              alt=""
              src={categoryW}
              width={isNonMediumScreens ? "650px" : "450px"}
              sx={{
                position: "absolute",
                left: "50%",
                bottom: "0",
                transform: "translate(-50%,0%)",
                zIndex: "1",
                transition: "250ms ease",
                opacity: hover === "women" || hover === "unisex" ? "1" : "0",
              }}
            />
            <Box
              component="img"
              alt=""
              src={categoryM}
              width={isNonMediumScreens ? "650px" : "450px"}
              sx={{
                position: "absolute",
                left: "50%",
                bottom: "0",
                transform: "translate(-50%,0%)",
                zIndex: "1",
                transition: "250ms ease",
                opacity: hover === "men" || hover === "unisex" ? "1" : "0",
              }}
            />
            <Box
              component="img"
              alt="men women selection"
              src={category}
              width={isNonMediumScreens ? "650px" : "450px"}
              sx={{ filter: "grayscale(1) contrast(1.05)" }}
            />
          </Box>
        </Box>
      </Box>
      {/* DIVIDER */}
      <Box
        sx={{
          width: "100%",
          padding: "20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Marquee gradient={false} speed={150} style={{ overflow: "hidden" }}>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            ABOUT US
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            ABOUT US
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            ABOUT US
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            ABOUT US
          </Typography>
        </Marquee>
      </Box>
      {/* ABOUT US SECTION */}
      <Box sx={{ width: "100%", minHeight: "90vh" }}>
        <Box
          display="grid"
          gridTemplateColumns="2fr 1fr"
          minHeight="90vh"
          sx={{
            "& > div": {
              gridColumn: isNonMediumScreensImg ? undefined : "span 12",
            },
          }}
        >
          <Box
            minHeight="90vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="20px"
            position="relative"
          >
            <Box
              component="img"
              alt="about"
              src={about}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(0.25)",
              }}
            />
          </Box>
          <Box
            minHeight={isNonMediumScreensImg ? "90vh" : "50vh"}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            padding="20px"
            gap="20px"
            flexDirection="column"
            sx={{
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              position: "relative",
            }}
          >
            <Typography
              variant="h1"
              sx={{ position: "absolute", top: "20px", left: "20px" }}
            >
              ABOUT OUR BRAND
            </Typography>
            <Typography sx={{ marginTop: isNonSmallScreens ? "0px" : "100px" }}>
              Dark Horse Clothing is a one-stop shop for all your fashion needs
              featuring the world's top brands. Our ecommerce platform is
              designed to give you a seamless shopping experience with quality
              products at affordable prices.
            </Typography>
            <Button variant="contained">KNOW MORE</Button>
          </Box>
        </Box>
      </Box>
      {/* DIVIDER */}
      <Box
        sx={{
          width: "100%",
          padding: "20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Marquee gradient={false} speed={150} style={{ overflow: "hidden" }}>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEWSLETTER
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEWSLETTER
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEWSLETTER
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "3px", mr: "25px" }}>
            NEWSLETTER
          </Typography>
        </Marquee>
      </Box>
      {/* NEWSLETTER SECTION */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="20px"
        sx={{ width: "100%", minHeight: "60vh", padding: "0 20px" }}
      >
        <Typography variant="h1">SUBSCRIBE TO OUR NEWSLETTER</Typography>
        <Typography variant="body2" sx={{ opacity: "0.8" }}>
          Stay on trend with our premium clothing and accessories. Subscribe to
          our newsletter for exclusive deals and early access to new
          collections.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isNonSmallScreens ? "row" : "column"}
        >
          <TextField
            label="Email Address"
            color="primary"
            focused
            sx={{
              width: isNonSmallScreens ? "600px" : "100%",
              padding: "10px",
            }}
          />
          <Button variant="contained">SUBMIT</Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
