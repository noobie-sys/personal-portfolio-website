"use client";
import React, { useCallback, useEffect } from "react";
import "./stickyCursor.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = () => {
  const cursorSize = 40;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOption = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOption),
    y: useSpring(mouse.y, smoothOption),
  };
  const manageMouseMove = useCallback((e: MouseEvent) => {
    // console.log(e.clientX)
    const { pageX, pageY } = e;
    mouse.x.set(pageX - cursorSize / 2);
    mouse.y.set(pageY - cursorSize / 2);
  }, [mouse.x, mouse.y]);
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manageMouseMove]);
  return (
    <motion.div
      className="cursor"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      id="cursor"
    ></motion.div>
  );
};

export default StickyCursor;
