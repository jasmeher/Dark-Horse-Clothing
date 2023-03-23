import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      width="100%"
      minHeight="40vh"
      sx={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        minHeight="40vh"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
          },
        }}
      >
        <Box
          padding="40px 20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          gap="10px"
          sx={{
            "& > h2": { textAlign: isNonMediumScreens ? undefined : "center" },
          }}
        >
          <Typography variant="h2" sx={{ width: "100%" }}>
            DARK HORSE CLOTHING
          </Typography>
        </Box>
        <Box
          padding="40px 20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          gap="10px"
          sx={{
            "& > h2": { textAlign: isNonMediumScreens ? undefined : "center" },
            "& > p": { textAlign: isNonMediumScreens ? undefined : "center" },
          }}
        >
          <Typography variant="h2" sx={{ width: "100%" }}>
            ABOUT
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
            Track Orders
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
            Shipping
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
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
          sx={{
            "& > h2": { textAlign: isNonMediumScreens ? undefined : "center" },
            "& > p": { textAlign: isNonMediumScreens ? undefined : "center" },
          }}
        >
          <Typography variant="h2" sx={{ width: "100%" }}>
            SERVICE
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
            Payments
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
            Refund Policy
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
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
          sx={{
            "& > h2": { textAlign: isNonMediumScreens ? undefined : "center" },
            "& > p": { textAlign: isNonMediumScreens ? undefined : "center" },
          }}
        >
          <Typography variant="h2" sx={{ width: "100%" }}>
            FOLLOW US
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
            Instagram
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
            Pinterest
          </Typography>
          <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
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
        gap={isNonMediumScreens ? undefined : "10px"}
        sx={{
          "& > p": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
            textAlign: isNonMediumScreens ? undefined : "center",
          },
        }}
      >
        <Typography variant="body2" sx={{ opacity: "0.7", width: "100%" }}>
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
