import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Hacker = ({ value, style, variant, link }) => {
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
    <Link
      to={link}
      className="text-reset"
      style={{ width: "fit-content", display: "block" }}
    >
      <Typography
        onMouseOver={handleEffect}
        sx={style}
        variant={variant}
        className="text-reset"
      >
        {value}
      </Typography>
    </Link>
  );
};

export default Hacker;
