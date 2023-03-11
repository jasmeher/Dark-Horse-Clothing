import { PanToolAltOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const iconRef = useRef(null);
  const [hide, setHide] = useState(true);
  const isMediumDevice = useMediaQuery("(max-width: 768px)");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - cursorRef.current.offsetWidth / 2;
    const y = e.clientY - cursorRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px , ${y}px) scale(${interacting ? 1.4 : 1})`,
      backgroundColor: `${interacting ? "#18d944" : "#14a637"}`,
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

        if (interacting) {
          setHide(false);
        } else {
          setHide(true);
        }
        animateTrailer(e, interacting);
      };
    }
  }, [isMediumDevice]);
  return (
    <div
      id="cursor"
      ref={cursorRef}
      style={{ display: isMediumDevice ? "none" : "flex" }}
    >
      <PanToolAltOutlined
        ref={iconRef}
        sx={{ display: hide ? "none" : "block" }}
      />
    </div>
  );
};

export default CustomCursor;
