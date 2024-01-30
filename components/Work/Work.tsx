import React from "react";
import "./work.css";
import { Button } from "@nextui-org/button";
import Line from "../Line_design/Line";
import { FaArrowRight } from "react-icons/fa";
import Cards from "@/ui/card";
import Face from "@/public/face5.jpg";
import Images from "@/public/image.jpg";
import Pic from "@/public/wallpaperflare.com_wallpaper (2).jpg";
// import { Image } from "@nextui-org/image";
import { CiLocationArrow1 } from "react-icons/ci";

import Image from "next/image";
const Work = () => {
  return (
    <div className="work-container">
      <div className="upper_div">
        <div className="heading">
          <h1>Practice Projects</h1>
          <h3>
            Practice projects where i use <span>my skills</span>.
          </h3>
        </div>
        <div className="cta">
          <h1>
            Check out more <br />
            portfolio I've worked on
          </h1>

          <div className="button">
            <Button
              color="default"
              variant="bordered"
              endContent={<FaArrowRight />}
              className="px-10 py-5 rounded-[4px] "
            >
              View More
            </Button>
          </div>
        </div>
      </div>
      <div className="middle_div">
        <div className="left_div widht_div">
          <div className="upper_element">
            <Image src={Face} alt="Face" />
          </div>
          <div className="lower_element">
            <Image src={Pic} alt="Face" />
          </div>
        </div>
        <div className="center_div widht_div">
          <Image src={Images} alt="Face" />
        </div>
        <div className="right_div widht_div">
          <div className="right_inner_upper_div_element">
            <Image src={Pic} alt="Face" />
          </div>
          <div className="right_inner_lower_div_element">
            <h1>View</h1>
            <h1>More</h1>
            <h1>Projects</h1>
            <div className="redirect_link">

              <CiLocationArrow1 size={100} className="arrow_icon" />
              
            </div>
          </div>
        </div>
      </div>
      <div className="lower_div">
        <div className="skill-logo">
          <h2>
            Web Development <span>♠</span>
          </h2>
          <h2>
            Web Development <span>♠</span>
          </h2>
          <h2>
            Web Development <span>♠</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
