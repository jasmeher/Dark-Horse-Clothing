import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import {
  SearchOutlined,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingBagOutlined,
  DragHandleOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "static/logo-invert.png";
import men from "static/men.jpg";
import women from "static/women.jpg";
import unisex from "static/unisex.jpg";
import accessories from "static/accessories.jpg";
import navBG from "static/navBg.jpg";
import Hacker from "components/Hacker/Hacker";

const navCat = [
  {
    title: "SEARCH",
    link: "/search",
    src: null,
    sub: null,
  },
  {
    title: "MEN",
    link: "/products/men",
    src: men,
    sub: ["all", "tops", "bottom", "footwear", "outerwear"],
  },
  {
    title: "WOMEN",
    link: "/products/women",
    src: women,
    sub: ["all", "tops", "bottom", "footwear", "outerwear"],
  },
  {
    title: "UNISEX",
    link: "/products/unisex",
    src: unisex,
    sub: ["all", "tops", "bottom", "footwear", "outerwear"],
  },
  {
    title: "ACCESSORIES",
    link: "/products/accessories",
    src: accessories,
    sub: null,
  },
  {
    title: "BROWSE COLLECTIONS",
    link: "/products/collections",
    src: null,
    sub: null,
  },
  {
    title: "CART",
    link: "/cart",
    src: null,
    sub: null,
  },
  {
    title: "FAVORITES",
    link: "/favorites",
    src: null,
    sub: null,
  },
  {
    title: "SIGN IN",
    link: "/signin",
    src: null,
    sub: null,
  },
];

const Navbar = () => {
  const isMediumDevice = useMediaQuery("(max-width: 768px)");
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navIcons = [
    {
      icon: <SearchOutlined />,
      link: "/search",
    },
    {
      icon: <PersonOutlineOutlined />,
      link: "/signin",
    },
    {
      icon: <FavoriteBorderOutlined />,
      link: "/favorites",
    },
    {
      icon: <ShoppingBagOutlined />,
      link: "/cart",
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleClose = () => setIsDrawerOpen(false);
  const [position, setPosition] = useState("0 0");
  return (
    <>
      <AppBar
        position="sticky"
        top="0"
        left="0"
        right="0"
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.main,
          boxShadow: "none",
          borderBottom: "1px solid rgb(255,255,255,0.2)",
          display: "flex",
          flexDirection: "row",
          zIndex: "10",
        }}
      >
        {/* LOGO SECTION */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexBasis: "calc(100%/3)",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Link to="/" className="text-reset">
            <Box
              component="img"
              alt="DARK HORSE"
              src={logo}
              width="62px"
              height="62px"
              marginLeft="-5px"
              sx={{
                "&:hover": {
                  filter:
                    "invert(70%) sepia(27%) saturate(3890%) hue-rotate(81deg) brightness(150%) contrast(93%)",
                },
              }}
            />
          </Link>
        </Box>
        {/* LINK SECTION */}
        <Box
          sx={{
            display: isMediumDevice ? "none" : "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "1px solid rgb(255,255,255,0.2)",
            flexBasis: "calc(100%/3)",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          {navIcons.map((icon) => (
            <Link to={icon.link} className="text-reset" key={icon.link}>
              <IconButton
                sx={{
                  color: theme.palette.text.primary,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {icon.icon}
              </IconButton>
            </Link>
          ))}
        </Box>
        {/* DRAWER SECTION */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            alignItems: "center",
            borderLeft: "1px solid rgb(255,255,255,0.2)",
            flexGrow: "1",
            paddingRight: "20px",
          }}
        >
          <IconButton
            sx={{
              color: theme.palette.text.primary,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            className="text-reset"
            onClick={() => setIsDrawerOpen(true)}
          >
            <DragHandleOutlined />
          </IconButton>
        </Box>
      </AppBar>
      <Drawer anchor={"right"} open={isDrawerOpen} onClose={handleClose}>
        {isMediumDevice ? (
          <Box
            sx={{
              width: 300,
              height: "100%",
              backgroundColor: theme.palette.background.secondary,
              padding: "10px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <CloseOutlined
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
            <Box
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
              gap="20px"
            >
              {navCat.map((item) => (
                <Typography
                  sx={{
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  key={item.title}
                >
                  <Link to={item.link} className="text-reset">
                    {item.title}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              width: "100vw",
              height: "100%",
              backgroundColor: theme.palette.background.secondary,
              padding: "10px 20px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: `url(${navBG})`,
                backgroundSize: "100%",
                backgroundPosition: position,
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                opacity: "0.07",
                filter: "contrast(1.6)",
                zIndex: "0",
                transition: "800ms ease",
              }}
            />
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              marginBottom="20px"
              sx={{ zIndex: "1" }}
            >
              <CloseOutlined
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
                className="text-reset"
              />
            </Box>
            <Box
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
              gap="20px"
              padding="50px 60px 0 60px"
              sx={{ zIndex: "1" }}
            >
              {navCat.map((item, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <Box
                      className="text-reset"
                      onMouseOver={() => {
                        if (index === 1) {
                          setPosition("0 25%");
                        }
                        if (index === 2) {
                          setPosition("0 50%");
                        }
                        if (index === 3) {
                          setPosition("0 75%");
                        }
                        if (index === 4) {
                          setPosition("0 100%");
                        }
                      }}
                      key={item.title}
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "30px",
                        alignItems: "center",
                        position: "relative",
                        "&:hover": {
                          "& > img": { opacity: "1" },
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Hacker
                        value={item.title}
                        link={item.link}
                        style={{
                          width: "250px",
                          fontSize: "3.5rem",
                          marginBottom: "2rem",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                        onClick={() => setSelectedIndex(index)}
                      />
                      {item.sub !== null && (
                        <Box
                          display={index === selectedIndex ? "flex" : "none"}
                          alignItems="center"
                          gap="20px"
                        >
                          {item.sub.map((subLink) => (
                            <Link
                              to={`/products/${
                                subLink === "all"
                                  ? item.title.toLowerCase()
                                  : subLink
                              }`}
                              className="text-reset"
                              key={subLink}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  textTransform: "capitalize",
                                  "&:hover": {
                                    color: theme.palette.primary.main,
                                    textDecoration: "underline",
                                  },
                                }}
                              >
                                {subLink}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      )}
                      {item.src !== null && (
                        <Box
                          component="img"
                          alt="category"
                          src={item.src}
                          sx={{
                            opacity: "0",
                            transition: "500ms ease",
                            position: "absolute",
                            width: "150px",
                            top: "-50px",
                            right: "0",
                            transform: `rotate(-${Math.floor(
                              Math.random() * 20
                            )}deg)`,
                            boxShadow:
                              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                          }}
                        />
                      )}
                    </Box>
                  );
                }
                if (index >= 5) {
                  return (
                    <Typography
                      sx={{
                        width: "fit-content",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      key={item.title}
                    >
                      <Link to={item.link} className="text-reset">
                        {item.title}
                      </Link>
                    </Typography>
                  );
                }
                return null;
              })}
            </Box>
            <Box
              margin="auto 0 10px 60px"
              display="flex"
              gap="20px"
              sx={{ zIndex: "1" }}
            >
              <Typography
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                className="text-reset"
              >
                FACEBOOK
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                className="text-reset"
              >
                INSTAGRAM
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                className="text-reset"
              >
                TWITTER
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                className="text-reset"
              >
                YOUTUBE
              </Typography>
            </Box>
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default Navbar;
