import React from "react";
import "@/components/About/about.css";
import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
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
