import React, { RefObject, forwardRef } from "react";
import "@/components/Skill/skill.css";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandFirebase,
  TbBrandPython,
} from "react-icons/tb";
import { SiCsswizardry } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skill =  () => {
  return (
    <div className="skill-div">
      <div className="skill-desc">
        <h1>Skill</h1>
        <h3>Skill that you need for your company.</h3>
      </div>
      <div className="skill-set">
        <div className="skill-title" >
          <TbBrandTypescript size={52} className="icon"  />
          <h1 className="skill-name" >Typescript</h1>
        </div>
        <div className="skill-title">
          <TbBrandJavascript size={52}   className="icon" />
          <h1 className="skill-name">Javascript</h1>
        </div>
        <div className="skill-title">
          <SiCsswizardry size={52}  className="icon"/>
          <h1 className="skill-name">CSS</h1>
        </div>
        <div className="skill-title">
          <TbBrandNextjs size={52}  className="icon"/>
          <h1 className="skill-name">NextJS</h1>
        </div>
        <div className="skill-title">
          <RiReactjsFill size={52}  className="icon"/>
          <h1 className="skill-name">ReactJS</h1>
        </div>
        <div className="skill-title">
          <BiLogoTailwindCss size={52}  className="icon"/>
          <h1 className="skill-name">Tailwind CSS</h1>
        </div>
        <div className="skill-title">
          <TbBrandFirebase size={52}  className="icon"/>
          <h1 className="skill-name">Firebase</h1>
        </div>
        <div className="skill-title">
          <TbBrandPython size={52} className="icon" />
          <h1 className="skill-name">Firebase</h1>
        </div>
      </div>
      <h1 className="coming-soon">More skills to coming in way..</h1>
    </div>
  );
};

export default Skill;
