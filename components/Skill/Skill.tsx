import React, { useEffect, useRef } from "react";
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
import { motion } from "framer-motion";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";
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

  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("#cursor");

    const skill_element = skillRef.current;
    if (skill_element && cursor) {
      const onMouseOver = () => {
        cursor.style.width = "100px";
        cursor.style.height = "100px";
        cursor.style.transform = "translate(-40% , -30%)";
      };

      const onMouseLeave = () => {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.transform = "translate(0% , 0%)";
      };

      skill_element.addEventListener("mouseover", onMouseOver);
      skill_element.addEventListener("mouseleave", onMouseLeave);

      return () => {
        skill_element.removeEventListener("mouseover", onMouseOver);
        skill_element.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <div className="skill-div">
      <div className="skill-desc">
        <h1>Skill</h1>
        <h3>Skill that you need for your company.</h3>
      </div>
      <div ref={skillRef} className="skill-set cursor-pointer">
        {skills.map((el, i) => {
          return (
            <div key={i}>
              <FramerMagneticEffect>
                <motion.div
                  initial={{ opacity: 0, translateX: -100, translateY: 20 }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="skill-title"
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
              </FramerMagneticEffect>
            </div>
          );
        })}
      </div>
      <motion.h1
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="coming-soon"
      >
        More skills coming in way..
      </motion.h1>
    </div>
  );
};

export default Skill;
