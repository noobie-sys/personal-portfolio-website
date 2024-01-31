import React, { RefObject, forwardRef, useEffect, useRef } from "react";
import "@/components/Skill/skill.css";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNextjs,
} from "react-icons/tb";
import {
  SiCsswizardry,
  SiFirebase,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";

const Skill = () => {
  const skills = [
    {
      skill: "Typescript",
      logo: <TbBrandTypescript size={52} className="icon" />,
    },
    {
      skill: "JavaScript",
      logo: <TbBrandJavascript size={52} className="icon" />,
    },
    {
      skill: "Next.js",
      logo: <TbBrandNextjs size={52} className="icon" />,
    },
    {
      skill: "CSS",
      logo: <SiCsswizardry size={52} className="icon" />,
    },
    {
      skill: "React.js",
      logo: <RiReactjsFill size={52} className="icon" />,
    },
    {
      skill: "Tailwind CSS",
      logo: <SiTailwindcss size={52} className="icon" />,
    },
    {
      skill: "Firebase",
      logo: <SiFirebase size={52} className="icon" />,
    },
    {
      skill: "Python",
      logo: <SiPython size={52} className="icon" />,
    },
  ];

  const skillRef = useRef<HTMLDivElement>(null)

  
  useEffect(()=> {
    
    const cursor = document.querySelector<HTMLElement>('#cursor')

    const skill_element = skillRef.current;
    if(skill_element) {
      skill_element.addEventListener('mouseover', () => {
        if(cursor) {
          cursor.style.width = "100px";
          cursor.style.height = "100px";
        }
      })
      skill_element.addEventListener('mouseleave', () => {
        if(cursor) {
          cursor.style.width = "40px"
          cursor.style.height = "40px"
        }
      })
    }

    return () => {
     if (skill_element){
      skill_element.removeEventListener('mouseover', () => {
        if(cursor) {
          cursor.style.width = "100px"
          cursor.style.height = "100px"
        }
      })
      skill_element.removeEventListener('mouseleave', () => {
        if(cursor) {
          cursor.style.width = "20px"
          cursor.style.height = "20px"
        }
      })
     }
    }

  }, [])
  
  
  return (
    <div className="skill-div">
      <div className="skill-desc">
        <h1>Skill</h1>
        <h3>Skill that you need for your company.</h3>
      </div>
      <div ref={skillRef} className="skill-set">
        {skills.map((el, i) => {
          return (
            <motion.div

              initial={{ opacity: 0, translateX: -100, translateY: 20 }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className="skill-title"
              key={i}
              id={`skill_${i}`}
            >
              {el.logo}
              <motion.h1
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="skill-name"
              >
                {el.skill}
              </motion.h1>
            </motion.div>
          );
        })}
      </div>
      <motion.h1  
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="coming-soon">More skills to coming in way..</motion.h1>
    </div>
  );
};

export default Skill;
