import React from "react";
import "@/components/Hero Section/Hero.css";
import Image from "next/image";
import face from "@/public/face1.jpg";
import { BsMouse } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="main-div w-full h-[80vh]">
      <div className="name dark:text-slate-300">
        <h2 className="">Aman</h2>
        <h2>Gupta</h2>
      </div>
      <div className="desc ">
        <h1>
          Hello, my name is Aman Gupta, nice to meet you I would like to welcome
          you with my personal portfolio.
        </h1>
      </div>
      <div className="mouse">
        <div className="mouse-icon">
        <BsMouse size={24} />
        </div>
        <h3 className="scroll">Scroll</h3>
        
      </div>
    </div>
  );
};

export default Hero;
