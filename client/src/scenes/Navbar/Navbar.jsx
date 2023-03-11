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

const navCat = [
  {
    title: "SEARCH",
    link: "/search",
  },
  {
    title: "MEN",
    link: "/products/men",
  },
  {
    title: "WOMEN",
    link: "/products/women",
  },
  {
    title: "UNISEX",
    link: "/products/unisex",
  },
  {
    title: "ACCESSORIES",
    link: "/products/accessories",
  },
  {
    title: "CART",
    link: "/cart",
  },
  {
    title: "FAVORITES",
    link: "/favorites",
  },
  {
    title: "SIGN IN",
    link: "/signin",
  },
];

const Navbar = () => {
  const isMediumDevice = useMediaQuery("(max-width: 768px)");
  const theme = useTheme();
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
  return (
    <>
      <AppBar
        position="static"
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
          zIndex: "1",
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
                  cursor: "none",
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
                    cursor: "none",
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
                cursor: "none",
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
                    cursor: "none",
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
                      cursor: "none",
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
                    cursor: "none",
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
                      cursor: "none",
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
        )}
      </Drawer>
    </>
  );
};

export default Navbar;
