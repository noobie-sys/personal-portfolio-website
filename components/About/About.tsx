import React from "react";
import "@/components/About/about.css";
import AboutShort from "./About_Short/AboutShort";
import AboutLong from "./About_long/AboutLong";
import Line from "../Line_design/Line";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="main-header">
      <AboutShort />
      <AboutLong />
      <Line />
    </div>
  );
};

export default About;
