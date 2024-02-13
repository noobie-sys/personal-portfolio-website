import React from "react";
import "./responsive/responsive.css";
import "./Hero.css";
import Image from "next/image";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import face from "@/public/face5.jpg";
import image2 from "@/public/aman/pic3.jpeg";

type Props = {};

const Hero = (props: Props) => {
  const aman = "Aman".split("");
  const gupta = "Gupta".split("");
  return (
    <div className="main-div w-full h-screen ">
      <div className="name dark:text-slate-300 ">
        <div className="w-full -leading-1">
          <motion.h1 initial={{translateX : -200}} animate={{translateX : 0}} transition={{duration : 0.6}} className="text-5xl ml-10 ">I&#39;m</motion.h1>
        </div>
        <div className="front-context">
          <div className="front-context--image">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20vw" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="frontend-div"
            >
              <Image src={image2} alt="Images" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, translateX: -200 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Frontend
            </motion.h2>
          </div>
          <motion.h1
            initial={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Developer
          </motion.h1>
        </div>

        <div className="desc ">
          <motion.h1
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Hello, my name is Aman Gupta, nice to meet you I would like to
            welcome you with my personal portfolio.
          </motion.h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="mouse z-50"
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
