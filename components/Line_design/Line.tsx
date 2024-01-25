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
    <div className="logos">
      <div className="logo-slide">
        <Image src={image1} alt="image" />
        <Image src={image2} alt="image" />
        <Image src={image3} alt="image" />
        <Image src={image4} alt="image" />
        <Image src={image5} alt="image" />
      </div>
      <div className="logo-slide">
        <Image src={image1} alt="image" />
        <Image src={image2} alt="image" />
        <Image src={image3} alt="image" />
        <Image src={image4} alt="image" />
        <Image src={image5} alt="image" />
      </div>
      {/* <div className='skill-logos'>
            <Image src={image1} alt='image' />
            <Image src={image2} alt='image' />
            <Image src={image3} alt='image' />
            <Image src={image4} alt='image' />
            <Image src={image5} alt='image' />
        </div>
        <div className='skill-logos'>
            <Image src={image1} alt='image' />
            <Image src={image2} alt='image' />
            <Image src={image3} alt='image' />
            <Image src={image4} alt='image' />
            <Image src={image5} alt='image' />
        </div> */}
    </div>
  );
};

export default Line;
