import React from "react";
import "./line.css";
import { motion } from "framer-motion";

const Line = () => {
  return (
    <motion.div
    initial={{opacity : 0 , scale : 0.7}}
    whileInView={{opacity : 1 , scale : 1}}
    transition={{delay : 0.3, duration : 0.2}}
    className="marquee">
      <div className="marquee__group">
        <span>Frontend Development ➺</span>
        <span>Backend Development ➺</span>
        <span>Full Stack Development ➺</span>
      </div>
      <div className="marquee__group" aria-hidden="true">
        <span>Frontend Development ➺</span>
        <span>Backend Development ➺</span>
        <span>Full Stack Development ➺</span>
      </div>
    </motion.div>
  );
};

export default Line;
