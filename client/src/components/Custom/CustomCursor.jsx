import { useMediaQuery } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./style.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const isMediumDevice = useMediaQuery("(max-width: 768px)");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - cursorRef.current.offsetWidth / 2;
    const y = e.clientY - cursorRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px , ${y}px) scale(${interacting ? 1.4 : 1})`,
      // backgroundColor: `${interacting ? "#00000000" : "#14a637"}`,
    };

    cursorRef.current.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  useEffect(() => {
    if (!isMediumDevice) {
      window.onmousemove = (e) => {
        const interactable = e.target.closest(".text-reset"),
          interacting = interactable !== null;

        animateTrailer(e, interacting);
      };
    }
  }, [isMediumDevice]);
  return (
    <div
      id="cursor"
      ref={cursorRef}
      style={{ display: isMediumDevice ? "none" : "flex" }}
    ></div>
  );
};

export default CustomCursor;
