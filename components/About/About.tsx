import React from "react";
import "./about.css";
import Image from "next/image";
import aman from "@/public/aman.jpg";
import image from "@/public/space.jpg";
import image2 from "@/public/aman/pic6.jpg";
import image3 from "@/public/aman/pic3.jpeg";
import image4 from "@/public/aman/pic2.jpeg";
import image5 from "@/public/aman/pic1.jpeg";
import image6 from "@/public/aman/amang.jpeg";
import { motion } from "framer-motion";
import { imageVariants, variants, variantsRight } from "@/utils/animation";
import '@/components/About/Responsive/responsive.css'

const About = () => {
  return (
    <div className="main-header">
      <div className="column-grid-image">
      <div className="hello">
          <h1 className="text-green-400">Some Asthethic Pics </h1>
        </div>
        <div className="column-images">
          <div className="grid-1">
            <motion.div
            variants={variants}
            initial='hidden'
            whileInView='show'
            className="grid-image-div-1">
              <Image src={aman} alt="Images" />
            </motion.div>
            <motion.div
            variants={variantsRight}
            initial='hidden'
            whileInView='show'
            className="grid-image-div-2">
              <Image src={image5} alt="Images" />
            </motion.div>
          </div>
          <div className="grid-2">
            <motion.div
            variants={imageVariants}
            initial='hidden'
            whileInView='show'
            className="grid2-image-div">
              <Image src={image2} alt="Images " />
            </motion.div>
          </div>
          <div className="grid-3">
            <div className="grid3-image-div-1">
              <motion.div
              variants={imageVariants}
              initial='hidden'
              whileInView='show'
              className="grid3-inner-image grid3-inner-image-div-1">
                <Image src={image6} alt="Images" />
              </motion.div>
              <motion.div
              variants={variantsRight}
              initial='hidden'
              whileInView='show'
              className="grid3-inner-image">
                <Image src={image3} alt="Images" />
              </motion.div>
            </div>
            <motion.div 
            variants={variantsRight}
            initial='hiddenDown'
            whileInView='showDown'
            className="grid3-image-div-2">
              <Image src={image4} alt="Images" />
            </motion.div>
          </div>
        </div>
        
      </div>
      <motion.div 
      

      className="heading">
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={'show'}
        transition={{delay : 0.2}}
        className="desc-div">
        <h1 className="" id="heading">About me</h1>
           <p>Greetings! I am Aman, a 19-year-old programmer who embarked on my coding journey back in 11th grade. Coding has been my passion, and I strive to learn and improve every day, dedicated to progressing in my programming skills.</p>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={'show'}
        transition={{delay : 0.3}}
        className="school">
          <h1>School and Degree</h1>
          <p>I Studied in Govt. Co-ed sarvodya vidhyalya, I choosed Commerce with Math after 10th standard. I currently not in collage but I have plan to pursue BCA degree.</p>
        </motion.div>
        <motion.div 
        variants={variants}
        initial='hidden'
        whileInView={'show'}
        transition={{delay : 0.4}}
        className="long-desc-div">
          <h1 className="coffee">
            Something beside than Coding
          </h1>
          <div>
            <p>Beside the coding stuff, I like to read and listen case study of business, <strong className="text-green-400">Craving for Cofee</strong>, Love to travel, and read Books sometimes</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
