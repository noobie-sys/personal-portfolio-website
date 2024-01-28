import React from "react";
import "./line.css";
import Image from "next/image";
import image1 from "@/public/logos/3m.svg";
import image2 from "@/public/logos/barstool-store.svg";
import image3 from "@/public/logos/budweiser.svg";
import image4 from "@/public/logos/buzzfeed.svg";
import image5 from "@/public/logos/forbes.svg";
import image6 from "@/public/logos/menshealth.svg";
import image7 from "@/public/logos/3m.svg";
type Props = {};

const Line = (props: Props) => {
  return (
    // <div className="logos">
    //   <div className="logo-slide">

    //     {/* <Image src={image1} alt="image" /> */}
    //     <h1 className="text-[1.5rem] uppercase">TypeScript</h1>
    //     <h1 className="text-[1.5rem] uppercase">JavaScript</h1>

    //     <h1 className="text-[1.5rem] uppercase">CSS</h1>

    //     <h1 className="text-[1.5rem] uppercase">Firebase</h1>

    //     <h1 className="text-[1.5rem] uppercase">Next.js</h1>

    //   </div>
    //   <div className="logo-slide rota">

    //     {/* <Image src={image1} alt="image" /> */}
    //     <h1 className="text-[1.5rem] uppercase">TypeScript</h1>
    //     <h1 className="text-[1.5rem] uppercase">JavaScript</h1>

    //     <h1 className="text-[1.5rem] uppercase">CSS</h1>

    //     <h1 className="text-[1.5rem] uppercase">Firebase</h1>

    //     <h1 className="text-[1.5rem] uppercase">Next.js</h1>

    //   </div>
    // </div>

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
