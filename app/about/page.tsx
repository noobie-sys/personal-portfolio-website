'use client'
import Cards from "@/ui/card";
import React, { useEffect, useRef } from "react";
import EventHub from "@/public/event.webp";
import redditCLone from "@/public/reddit-clone.webp";
import portfoliSite from "@/public/portfolio.jpeg";

type Details = {
  name: string;
  desc: string;
  image: string;
  links: string;
};

const About = () => {
  const workDetails = [
    {
      name: "Event Hub",
      desc: "Event Hub is where you can host and edit events, it is made up with next.js, typescript , javascript , firebase, atom fot state management and many other library for styles",
      image: EventHub,
      links: "https://event-hub-3fv5.vercel.app",
    },
    {
      name: "Reddit Clone",
      desc: "Reddit is huge platform for hangout, so i thought i have to make it so i did it. It was made up with next.js , atom for state management, tailwinds, typescript and javascript and many other style framerwork",
      image: redditCLone,
      links: "https://reddit-clone-app-eight.vercel.app",
    },
    {
      name: "Previous Portfolio site",
      desc: "My first ever portfolio site where i post my two work and it made up with tailwind css and next.js",
      image: portfoliSite,
      links: "https://aman-gupta.vercel.app",
    },
  ];

  const mouseRef = useRef<HTMLDivElement>(null)

  useEffect(() => 
  {
    const cursor = document.querySelector<HTMLElement>('#cursor');
    const mouseRefElement = mouseRef.current;

    if (mouseRefElement) {
      mouseRefElement.addEventListener("mouseover", () => {
        if (cursor) {
          cursor.style.width = "100px";
          cursor.style.height = "100px";
          cursor.innerHTML = "<h1>Click Me</h1>";
          cursor.style.transform = "translate(-50% ,-50%)";
        }
      });
      mouseRefElement.addEventListener("mouseleave", () => {
        if (cursor) {
          cursor.style.width = "40px";
          cursor.style.height = "40px";
          cursor.innerHTML = "";
          cursor.style.transform = "translate(0,0)";
        }
      });
    }
    return () => {
      if (mouseRefElement) {
        mouseRefElement.removeEventListener("mouseover", () => {
          if (cursor) {
            cursor.style.width = "100px";
            cursor.style.height = "100px";
            cursor.innerHTML = "<h1>Click Me</h1>";
            cursor.style.transform = "translate(-50% ,-50%)";
          }
        });
        mouseRefElement.removeEventListener("mouseleave", () => {
          if (cursor) {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.innerHTML = "";
            cursor.style.transform = "translate(0,0)";
          }
        });
      }
    }

  } , [])

  return (
    <div className="px-10 flex flex-col py-4 ">
      <h1 className="work-heading">
        Some showcase <span className="">Projects</span>
      </h1>

      <div className="flex flex-wrap gap-4 justify-center  "  ref={mouseRef}>
        {workDetails.map((el, i) => (
          <Cards
            desc={el.desc}
            image={el.image}
            link={el.links}
            name={el.name}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
