import React from "react";
import "./about.css";
import AboutShort from "./About_Short/AboutShort";
import AboutLong from "./About_long/AboutLong";
import Line from "../Line_design/Line";
import Image from "next/image";
import aman from "@/public/aman.jpg";
import image from "@/public/space.jpg";
import image2 from "@/public/hello.jpg";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="main-header">
      <div className="column-grid-image">
        <div className="column-images">
          <div className="grid-1">
            <div className="grid-image-div-1">
              <Image src={aman} alt="Images" />
            </div>
            <div className="grid-image-div-2">
              <Image src={image} alt="Images" />
            </div>
          </div>
          <div className="grid-2">
            <div className="grid2-image-div">
              <Image src={image} alt="Images " />
            </div>
          </div>
          <div className="grid-3">
            <div className="grid3-image-div-1">
              <div className="grid3-inner-image">
                <Image src={image} alt="Images" />
              </div>
              <div className="grid3-inner-image">
                <Image src={image} alt="Images" />
              </div>
            </div>
            <div className="grid3-image-div-2">
              <Image src={image} alt="Images" />
            </div>
          </div>
        </div>
        <div className="hello">
          <h1>Some Asthethic Pics </h1>
        </div>
      </div>
      <div className="heading">
        <h1>About me</h1>
      </div>
      {/* <AboutShort />
      <AboutLong />
      <Line /> */}
    </div>
  );
};

export default About;
