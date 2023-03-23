import { Typography } from "@mui/material";
import React from "react";

const Hacker = ({ value, style, variant, link, onClick }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleEffect = (e) => {
    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iterations >= value.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };
  return (
    <Typography
      onMouseOver={handleEffect}
      sx={style}
      variant={variant}
      className="text-reset"
      onClick={onClick}
    >
      {value}
    </Typography>
  );
};

export default Hacker;
