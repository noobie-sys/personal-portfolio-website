import React from 'react'
import '@/components/About/about.css'
import { Button } from '@nextui-org/button'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import code from "@/public/code.png";
import Image from 'next/image';
import { variants, variantsRight } from '@/utils/animation'


const AboutShort = () => {
  return (
    <motion.div
    
    className="about">
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView='show'
        className="about-desc">
          <h1>About Me</h1>
          <p>I can deliver results that exceed your <strong className=''>expectaions</strong>.</p>
          <div className="hire-button">
            <Button
              color="default"
              variant="bordered"
              endContent={<FaArrowRight />}
              className="px-10 py-5 rounded-[4px] "
            >
              Hire me
            </Button>
          </div>
        </motion.div>
        <motion.div
        variants={variantsRight}
        initial='hidden'
        whileInView={'show'}
        
        className="sticker">
          <Image src={code} alt="Coding Image" width={200} height={200} className="code-image" />
        </motion.div>
      </motion.div>
  )
}

export default AboutShort