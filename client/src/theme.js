import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Open Sans", // Body text font
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: "Bebas Neue", // Heading font
      fontSize: "3.5rem",
      fontWeight: 700,
      color: "#fff", // White color for headings
    },
    h2: {
      fontFamily: "Bebas Neue",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#fff",
    },
    h3: {
      fontFamily: "Bebas Neue",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#fff",
    },
    h4: {
      fontFamily: "Bebas Neue",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#fff",
    },
    h5: {
      fontFamily: "Bebas Neue",
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#fff",
    },
    h6: {
      fontFamily: "Bebas Neue",
      fontSize: "1rem",
      fontWeight: 700,
      color: "#fff",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#fff", // White color for body text
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#fff",
    },
  },
  palette: {
    primary: {
      main: "#18d944", // Bright green color
      hover: "#14a637", // Darker green hover color
    },
    secondary: {
      main: "#00a3e0", // electric blue color
      hover: "#0077b3", // Darker blue hover color
    },
    background: {
      main: "#111",
      secondary: "#222",
    },
    text: {
      primary: "#fff",
    },
    success: {
      main: "#228B22", // forest green color
      hover: "#1e6823", // Darker green hover color
    },
    error: {
      main: "#ff3f3f", // Red color
      hover: "#cc2f2f", // Darker red hover color
    },
    warning: {
      main: "#ffa500", // Orange color
      hover: "#cc8400", // Darker orange hover color
    },
    info: {
      main: "#00bfff", // Light blue color
      hover: "#0094cc", // Darker blue hover color
    },
  },
});

export default theme;
