import React from "react";
import "./about.css";
import Line from "../Line_design/Line";
import Image from "next/image";
import aman from "@/public/aman.jpg";
import image from "@/public/space.jpg";
import image2 from "@/public/aman/pic6.jpg";
import image3 from "@/public/aman/pic3.jpeg";
import image4 from "@/public/aman/pic2.jpeg";
import image5 from "@/public/aman/pic1.jpeg";
import image6 from "@/public/aman/amang.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="main-header">
      <div className="column-grid-image">
        <div className="column-images">
          <div className="grid-1">
            <div className="grid-image-div-1">
              <Image src={aman} alt="Images" />
            </div>
            <div className="grid-image-div-2">
              <Image src={image5} alt="Images" />
            </div>
          </div>
          <div className="grid-2">
            <div className="grid2-image-div">
              <Image src={image2} alt="Images " />
            </div>
          </div>
          <div className="grid-3">
            <div className="grid3-image-div-1">
              <div className="grid3-inner-image">
                <Image src={image6} alt="Images" />
              </div>
              <div className="grid3-inner-image">
                <Image src={image3} alt="Images" />
              </div>
            </div>
            <div className="grid3-image-div-2">
              <Image src={image4} alt="Images" />
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
    </div>
  );
};

export default About;
