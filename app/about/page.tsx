import Cards from "@/ui/card";
import React from "react";
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

  return (
    <div className="px-10 flex flex-col py-4 ">
      <h1 className="work-heading">
        Some showcase <span className="">Projects</span>
      </h1>

      <div className="flex flex-wrap gap-4 justify-center items-center ">
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
