import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ width, height, name, price, img, classIdentifier }) => {
  return (
    <Box
      sx={{ width, height }}
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      gap="5px"
      className={classIdentifier}
    >
      <Box
        component="img"
        alt="product"
        src={img}
        sx={{
          width: "100%",
          height: "380px",
          objectFit: "cover",
          objectPosition: "top",
        }}
      ></Box>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1">${price.toFixed(2)}</Typography>
      <Link to="/product/1" className="text-reset" style={{ width: "100%" }}>
        <Button variant="contained" sx={{ width: "100%", borderRadius: "0" }}>
          VIEW
        </Button>
      </Link>
    </Box>
  );
};

export default Card;
