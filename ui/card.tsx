"use client";
import React, { AnchorHTMLAttributes } from "react";
import Face from "../public/space.jpg";
import Image, { ImageProps } from "next/image";
import "./card.css";
import Link from "next/link";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";
import { siteConfig } from "@/config/site";

type Props = {
  name : string,
  desc : string ,
  image : ImageProps,
  link : string
}


const Cards = () => {
  return (
    <FramerMagneticEffect >
     
      <div  className="card-div max-w-sm  ">
        

        <Link href={siteConfig.links.github}>
          <Image className="rounded-t-lg object-cover" src={Face} alt="" />
        </Link>
        <div className="card-detail">
          <div>
            <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight">
              Project 1
            </h5>
          </div>
          <p className="mb-14 font-normal  ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </FramerMagneticEffect>
  );
};

export default Cards;
