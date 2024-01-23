import React from "react";
import "@/components/About/about.css";
import AboutShort from "./About_Short/AboutShort";
import AboutLong from "./About_long/AboutLong";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="main-header">
      <AboutShort />
      <AboutLong />
    </div>
  );
};

export default About;
