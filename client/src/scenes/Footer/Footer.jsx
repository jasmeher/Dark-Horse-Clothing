import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      minHeight="40vh"
      sx={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
    >
      <Box display="grid" gridTemplateColumns="repeat(4,1fr)" minHeight="40vh">
        <Box
          padding="40px 20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          gap="10px"
        >
          <Typography variant="h2">DARK HORSE CLOTHING</Typography>
        </Box>
        <Box
          padding="40px 20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          gap="10px"
        >
          <Typography variant="h2">ABOUT</Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Track Orders
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Shipping
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Contact Us
          </Typography>
        </Box>
        <Box
          padding="40px 20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          gap="10px"
        >
          <Typography variant="h2">SERVICE</Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Payments
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Refund Policy
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Privacy Policy
          </Typography>
        </Box>
        <Box
          padding="40px 20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          gap="10px"
        >
          <Typography variant="h2">FOLLOW US</Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Instagram
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Pinterest
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7" }}>
            Twitter
          </Typography>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,1fr)"
        minHeight="10vh"
        borderTop="1px solid rgba(255,255,255,0.2)"
        padding="20px 20px"
      >
        <Typography variant="body2" sx={{ opacity: "0.7" }}>
          DARK HORSE CLOTHING 2023. ALL RIGHTS RESERVED
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", opacity: "0.7" }}
        >
          DESIGNED BY JASMEHER SINGH
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "right",
            opacity: "0.7",
            "&:hover": { cursor: "pointer", color: theme.palette.primary.main },
          }}
        >
          INSPIRATIONS FOR DESIGN
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
