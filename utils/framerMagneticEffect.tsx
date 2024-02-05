"use client";
import React, { EventHandler, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";




const FramerMagneticEffect = ({ children }: { children: React.ReactNode }) => {
  const mouseIconRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (mouseIconRef.current) {
      const { width, height, left, top } =
        mouseIconRef.current?.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={mouseIconRef}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMagneticEffect;
