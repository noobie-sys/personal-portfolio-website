import React from "react";
import "./work.css";
import { Button } from "@nextui-org/button";
import Line from "../Line_design/Line";
import { FaArrowRight } from "react-icons/fa";
import Cards from "@/ui/card";
import Eventhub from "@/public/event.webp";
import Portfolio from "@/public/portfolio.jpeg";
import Reddit from "@/public/reddit-clone.webp";
import Images from "@/public/space.jpg";
// import { Image } from "@nextui-org/image";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";
import Image from "next/image";
import { imageVariants, variants, variantsRight } from "@/utils/animation";
import Link from "next/link";


const Work = () => {
  return (
    <div className="work-container">
      <div className="upper_div">
        <div className="heading">
          <motion.h1
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
          >
            Practice Projects
          </motion.h1>
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.15 }}
          >
            Practice projects where i use <span>my skills</span>.
          </motion.h3>
        </div>
        <motion.div
          variants={variantsRight}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.12 }}
          className="cta"
        >
          <h1>
            Check out more <br />
            portfolio I've worked on
          </h1>

          <div className="button">
            <Button
              color="default"
              variant="bordered"
              endContent={<FaArrowRight />}
              className="px-10 py-5 rounded-[4px] "
            >
              View More
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="middle_div">
        <div className="left_div widht_div">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="upper_element"
          >
            <Image src={Portfolio} alt="Face" />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hiddenDown"
            whileInView="showDown"
            className="lower_element"
          >
            <Image src={Images} alt="Face" />
          </motion.div>
        </div>
        <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView='show'
        className="center_div widht_div">
          <Image src={Reddit} alt="Reddit" />
        </motion.div>
        <div className="right_div widht_div">
          <motion.div
           variants={variantsRight}
           initial="hidden"
           whileInView={'show'}
          className="right_inner_upper_div_element">
            <Image src={Eventhub} alt="Previous portflio site" />
          </motion.div>
          <motion.div
          variants={variantsRight}
          initial="hiddenDown"
          whileInView='showDown'
          className="right_inner_lower_div_element">
            <h1>View</h1>
            <h1>More</h1>
            <h1>Projects</h1>
            <Link href={'/about'} className="redirect_link">
              <CiLocationArrow1 size={100} className="arrow_icon" />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="lower_div">
        
        <Line />
        {/* <div className="skill-logo">
          <h2>
            Web Development <span>♠</span>
          </h2>
          <h2>
            Web Development <span>♠</span>
          </h2>
          <h2>
            Web Development <span>♠</span>
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
