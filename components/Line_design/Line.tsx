import React from "react";
import "./line.css";

const Line = () => {
  return (
    <div className="marquee">
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
    </div>
  );
};

export default Line;
