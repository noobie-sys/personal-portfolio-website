"use client";
import React, { AnchorHTMLAttributes } from "react";
import Face from "../public/space.jpg";
import Image, { ImageProps } from "next/image";
import "./card.css";
import Link from "next/link";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";

type Props = {
  name : string,
  desc : string ,
  image : ImageProps,
  link : string
}


const Cards = () => {
  return (
    <FramerMagneticEffect>
     
      <div className="card-div max-w-sm  ">
        <Link href="#">
          <Image className="rounded-t-lg object-cover" src={Face} alt="" />
        </Link>
        <div className="card-detail">
          <Link href="#">
            <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight">
              Project 1
            </h5>
          </Link>
          <p className="mb-3 font-normal ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          <Link href="#" className="flex items-center  redirect-link-project ">
            Take me
          </Link>
        </div>
      </div>
    </FramerMagneticEffect>
  );
};

export default Cards;
