"use client";
import React, { useCallback, useEffect } from "react";
import "./stickyCursor.css";
import { motion, useMotionValue, useSpring } from "framer-motion";



const StickyCursor = () => {
  const cursorSize = 40;

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const springOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMousePosition = {
    x: useSpring(mousePosition.x, springOptions),
    y: useSpring(mousePosition.y, springOptions),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      mousePosition.x.set(pageX - cursorSize / 2);
      mousePosition.y.set(pageY - cursorSize / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition.x, mousePosition.y ,cursorSize]);

  return (
    <motion.div
      className="cursor"
      style={{
        x: smoothMousePosition.x,
        y: smoothMousePosition.y,
      }}
      id="cursor"
    ></motion.div>
  );
};

export default StickyCursor;