import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import {
  SearchOutlined,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingBagOutlined,
  DragHandleOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const navIcons = [
    {
      icon: (
        <SearchOutlined
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        />
      ),
      link: "/search",
    },
    {
      icon: (
        <PersonOutlineOutlined
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        />
      ),
      link: "/signin",
    },
    {
      icon: (
        <FavoriteBorderOutlined
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        />
      ),
      link: "/favorites",
    },
    {
      icon: (
        <ShoppingBagOutlined
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        />
      ),
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
          height: "8vh",
          borderBottom: `1px solid ${theme.palette.text.primary}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          flexDirection: "row",
          zIndex: "1",
        }}
      >
        <Box width="33.33vw" display="flex" alignItems="center">
          <Box
            component="img"
            alt="DARK HORSE"
            src={logo}
            width="62px"
            height="62px"
            marginLeft="-5px"
            sx={{
              "&:hover": {
                cursor: "pointer",
                filter:
                  "invert(70%) sepia(27%) saturate(3890%) hue-rotate(81deg) brightness(150%) contrast(93%)",
              },
            }}
            onClick={() => navigate("/")}
          />
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          gap="20px"
          sx={{ display: isMediumDevice ? "none" : "flex" }}
        >
          {navCat.map(
            (item, index) =>
              index > 0 &&
              index < 5 && (
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: theme.palette.primary.main,
                    },
                  }}
                  key={item.title}
                >
                  <Link to={item.link} className="text-reset">
                    {item.title}
                  </Link>
                </Typography>
              )
          )}
        </Box>
        <Box
          width="33.33vw"
          justifyContent="flex-end"
          sx={{ display: isMediumDevice ? "none" : "flex" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            color={theme.palette.text.primary}
          >
            {navIcons.map((item) => (
              <div key={item.link}>
                <Link
                  to={item.link}
                  className="text-reset"
                  style={{ display: "flex" }}
                >
                  {item.icon}
                </Link>
              </div>
            ))}
          </Box>
        </Box>
        <Box
          justifyContent="flex-end"
          alignItems="center"
          gap="10px"
          sx={{ display: isMediumDevice ? "flex" : "none", color: "white" }}
        >
          <Link to="/cart" className="text-reset" style={{ display: "flex" }}>
            <ShoppingBagOutlined
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                },
              }}
            />
          </Link>
          <DragHandleOutlined
            sx={{
              fontSize: "36px",
              "&:hover": {
                cursor: "pointer",
                color: theme.palette.primary.main,
              },
            }}
            onClick={() => setIsDrawerOpen(true)}
          />
        </Box>
      </AppBar>
      <Drawer anchor={"right"} open={isDrawerOpen} onClose={handleClose}>
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
            <CloseOutlined onClick={handleClose} />
          </Box>
          <Box
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
            gap="20px"
            sx={{ display: isMediumDevice ? "flex" : "none" }}
          >
            {navCat.map((item) => (
              <Typography
                sx={{
                  "&:hover": {
                    cursor: "pointer",
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
      </Drawer>
    </>
  );
};

export default Navbar;
