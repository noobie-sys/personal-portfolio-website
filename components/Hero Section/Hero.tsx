import React from "react";
import "@/components/Hero Section/Hero.css";
import Image from "next/image";
import face from "@/public/face1.jpg";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const aman = "Aman".split("");
  const gupta = "Gupta".split("");

  console.log(aman);
  return (
    <div className="main-div w-full h-screen ">
      <div className="name dark:text-slate-300 ">
        <div className="name-element flex">
          {aman.map((el, i) => (
            <motion.h2
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: i * 0.09, duration: 0.4 }}
              className="flex   "
              key={i}
            >
              {el}
            </motion.h2>
          ))}
        </div>
        <div className="flex name-element">
          {gupta.map((el, i) => (
            <motion.h2
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i}
            >
              {el}
            </motion.h2>
          ))}
        </div>
      </div>
      <div className="desc ">
        <motion.h1
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Hello, my name is Aman Gupta, nice to meet you I would like to welcome
          you with my personal portfolio.
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mouse"
      >
        <div className="mouse-icon">
          <BsMouse size={24} className="icon-mouse" />
        </div>
        <h3 className="scroll">Scroll</h3>
      </motion.div>
    </div>
  );
};

export default Hero;
