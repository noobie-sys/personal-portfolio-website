import Cards from "@/ui/card";
import React from "react";

const About = () => {
  return (
    <div className="px-10 flex flex-col py-4 ">
      <h1 className="work-heading">
        Some showcase <span className="">Projects</span>
      </h1>

      <div className="flex flex-wrap gap-4 justify-center items-center ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
       
      </div>
    </div>
  );
};

export default About;
