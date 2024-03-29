"use client";
import React, { AnchorHTMLAttributes, useEffect, useRef } from "react";
import Face from "../public/space.jpg";
import Image, { ImageProps, StaticImageData } from "next/image";
import "./card.css";
import Link from "next/link";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";
import { siteConfig } from "@/config/site";

type Props = {
  name: string;
  desc: string;
  image: StaticImageData;
  link: string;
  skill: Array<string>;
};

const Cards = ({ name, desc, image, link, skill }: Props) => {
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("#cursor");
    const mouseRefElement = mouseRef.current;

    const mouseMove = () => {
      if (cursor) {
        cursor.style.width = "100px";
        cursor.style.height = "100px";
        cursor.innerHTML = "<h1>Click Image</h1>";
        cursor.style.transform = "translate(-50% ,-50%)";
      }
    };

    const mouseLeave = () => {
      if (cursor) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.innerHTML = "";
        cursor.style.transform = "translate(0,0)";
      }
    };

    if (mouseRefElement) {
      mouseRefElement.addEventListener("mouseover", mouseMove);
      mouseRefElement.addEventListener("mouseleave", mouseLeave);
    }
    return () => {
      if (mouseRefElement) {
        mouseRefElement.removeEventListener("mouseover", mouseMove);
        mouseRefElement.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return (
    <div className="card-div max-w-sm  " ref={mouseRef}>
      <Link href={link} className="image-card" target="_blank">
        <Image className="rounded-t-lg object-cover" src={image} alt="" />
      </Link>
      <div className="card-detail">
        <div>
          <h5 className="mb-2 ml-3 text-2xl font-bold tracking-tight">
            {name}
          </h5>
        </div>
        <p className="mb-14 font-normal  ">{desc}</p>
        <div className="flex flex-wrap gap-1">
          {skill.map((el, i) => {
            return (
              <div
                className=" border-2 px-2 py-0.5 flex justify-center items-center backdrop-blur-3xl rounded-full  border-white "
                key={i}
              >
                <span>{el}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
