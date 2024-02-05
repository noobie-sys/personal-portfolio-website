"use client";
import React, { AnchorHTMLAttributes } from "react";
import Face from "../public/space.jpg";
import Image, { ImageProps, StaticImageData } from "next/image";
import "./card.css";
import Link from "next/link";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";
import { siteConfig } from "@/config/site";

type Props = {
  name : string,
  desc : string ,
  image : StaticImageData,
  link : string
}


const Cards = ({name , desc , image , link} : Props) => {
  return (
    <FramerMagneticEffect >
     
      <div  className="card-div max-w-sm  ">
        

        <Link href={link} className="image-card">
          <Image className="rounded-t-lg object-cover" src={image} alt="" />
        </Link>
        <div className="card-detail">
          <div>
            <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight">
              {name}
            </h5>
          </div>
          <p className="mb-14 font-normal  ">
            {desc}
          </p>
        </div>
      </div>
    </FramerMagneticEffect>
  );
};

export default Cards;
