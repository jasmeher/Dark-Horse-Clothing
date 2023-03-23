import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popover,
  Slider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HorizontalRule } from "@mui/icons-material";
import Footer from "scenes/Footer/Footer";
import Card from "components/Card/Card";
import men from "static/men.jpg";

const products = [
  {
    id: "1",
    name: "NIKE T-SHIRT",
    brand: "Nike",
    price: 100,
    img: men,
  },
  {
    id: "2",
    name: "Nike T-shirt",
    brand: "Nike",
    price: 100,
    img: men,
  },
  {
    id: "3",
    name: "Nike T-shirt",
    brand: "Nike",
    price: 100,
    img: men,
  },
  {
    id: "4",
    name: "Nike T-shirt",
    brand: "Nike",
    price: 100,
    img: men,
  },
  {
    id: "5",
    name: "Nike T-shirt",
    brand: "Nike",
    price: 100,
    img: men,
  },
];

const Input = styled(MuiInput)`
  width: 80px;
`;

const AllProducts = () => {
  const { category } = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(null);
  const [value, setValue] = useState([10, 100]);
  const theme = useTheme();
  const isMediumScreens = useMediaQuery("(max-width: 768px)");
  const isSmallScreens = useMediaQuery("(max-width: 425px)");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(event.currentTarget.innerText);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(null);
  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, index) => {
    const newValue = value.map((val, i) => {
      if (i === index) {
        if (index === 1) {
          if (event.target.value < value[0]) {
            return val;
          }
        }
        if (index === 0) {
          if (event.target.value > value[1]) {
            return val;
          }
        }
        if (event.target.value > 1000) {
          return val;
        }
        val = event.target.value;
        return val;
      } else {
        return val;
      }
    });
    setValue(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000) {
      setValue(1000);
    }
  };

  return (
    <>
      {/* HEADER */}
      <Box
        width="100%"
        height="14rem"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        padding="10px 20px"
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          position: "relative",
          marginBottom: "10px",
          overflowX: "hidden",
        }}
      >
        <Box
          width="100%"
          sx={{ position: "absolute", top: "10px", left: "20px" }}
        >
          <Typography
            variant="body2"
            sx={{ opacity: "0.7", textTransform: "capitalize" }}
          >
            Home/Products/{category}
          </Typography>
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: isSmallScreens ? "2.5rem" : undefined,
            cursor: "default",
          }}
        >
          {category}'s Clothing
        </Typography>
      </Box>
      {/* FILTERS */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        padding="0 20px"
        sx={{ overflowX: "hidden" }}
      >
        <div>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: theme.palette.primary.main,
              },
              color:
                open === "Filters >>"
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              width: "fit-content",
            }}
            onClick={handleClick}
          >
            Filters {">>"}
          </Typography>
          <Popover
            open={open === "Filters >>" ? true : false}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            disablePortal
            sx={{
              "& > .MuiPopover-paper": {
                background: theme.palette.background.main,
                width: "100%",
                minHeight: "fit-content",
                borderRadius: "0",
                boxShadow: "0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <Box
              width="100%"
              height="100%"
              gap="10px"
              padding={isMediumScreens ? "20px 20px" : "20px 0px"}
            >
              <Box
                display="grid"
                gridTemplateColumns="repeat(4,1fr)"
                gap="60px"
                sx={{
                  "& > div": {
                    gridColumn: isMediumScreens ? "span 4" : undefined,
                  },
                }}
              >
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography variant="h5" sx={{ letterSpacing: "1px" }}>
                    Category
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="All"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Tops"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Bottoms"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Footwear"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Outerwear"
                    />
                  </FormGroup>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography variant="h5" sx={{ letterSpacing: "1px" }}>
                    SIZE
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="All"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="XS"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="S"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="M"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="L"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="XL"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="XXL"
                    />
                  </FormGroup>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography variant="h5" sx={{ letterSpacing: "1px" }}>
                    PRICE
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="$0 - $150"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="$0 - $250"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="$100 - $300"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="$200 - $400"
                    />
                  </FormGroup>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    gap="20px"
                    sx={{ width: "50%" }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Input
                        value={value[0]}
                        onChange={(event) => handleInputChange(event, 0)}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 1,
                          min: 0,
                          max: 1000,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                        sx={{
                          border: "1px solid rgba(255,255,255,0.2)",
                          paddingLeft: "5px",
                          fontSize: "1.2rem",
                        }}
                      />
                      <HorizontalRule />
                      <Input
                        value={value[1]}
                        onChange={(event) => handleInputChange(event, 1)}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 1,
                          min: 0,
                          max: 1000,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                        sx={{
                          border: "1px solid rgba(255,255,255,0.2)",
                          paddingLeft: "5px",
                          fontSize: "1.2rem",
                        }}
                      />
                    </Box>
                    <Slider
                      value={value}
                      onChange={handleSliderChange}
                      min={0}
                      max={1000}
                    />
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography variant="h5" sx={{ letterSpacing: "1px" }}>
                    SORT BY
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Newest"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Bestsellers"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Price Low - High"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Price High - Low"
                    />
                  </FormGroup>
                </Box>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="20px"
              >
                <Button variant="contained">APPLY</Button>
                <Button variant="outlined">Reset</Button>
              </Box>
            </Box>
          </Popover>
        </div>
        <div>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: theme.palette.primary.main,
              },
              color:
                open === "Sort By"
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              width: "fit-content",
            }}
            onClick={handleClick}
          >
            Sort By
          </Typography>
          <Popover
            open={open === "Sort By" ? true : false}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            disablePortal
            sx={{
              "& > .MuiPopover-paper": {
                background: theme.palette.background.main,
                width: "200px",
                minHeight: "fit-content",
                borderRadius: "0",
                boxShadow: "0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              gap="10px"
              padding="10px 15px"
            >
              <Typography variant="h5" sx={{ letterSpacing: "1px" }}>
                SORT BY
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Newest"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Bestsellers"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Price Low - High"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Price High - Low"
                />
              </FormGroup>
            </Box>
          </Popover>
        </div>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap="20px"
        padding="40px 20px"
        sx={{ overflowX: "hidden" }}
      >
        {products.map((product) => (
          <Box width="300px" key={product.id}>
            <Card name={product.name} img={product.img} price={product.price} />
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default AllProducts;
