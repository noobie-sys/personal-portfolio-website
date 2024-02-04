"use client";
import React, { useEffect, useRef } from "react";
import "./contact.css";
import "./responsive/responsive.css";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import ContactForm from "./ContactFOrm/ContactForm";
import { CiInstagram } from "react-icons/ci";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiTwitterXFill,
} from "react-icons/ri";

export const variants = {
    hidden : {
        opacity : 0,
        translateX : -100
    },
    show : {
        opacity : 1 ,
        translateX : 0,
        
    }
}

const Contact = () => {
  const Text = "LET'S TALK ABOUT YOUR PROJECT".split(" ");
  return (
    <motion.div className="contact-container">
      <div className="--contact-container">
        <div className="contact-quote">
          <motion.h1 transition={{ staggerChildren: 0.2 }}>
            {Text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
            
                key={i}
                className={`span-${i}`}
              >
                {el}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>

      <div className="social-media-icons">
        <motion.div
           variants={variants}
           initial='hidden'
           whileInView='show'
          transition={{ delay: 0.2 }}
          className="instagram "
        >
          <CiInstagram size={82} className="instagram-icon icons" />
        </motion.div>

        <motion.div
           variants={variants}
           initial='hidden'
           whileInView='show'

          transition={{ delay: 0.24 }}
          className="LinkedIn "
        >
          <RiLinkedinBoxFill size={82} className="linkedIn-icon icons" />
        </motion.div>
        <motion.div
        variants={variants}
          initial='hidden'
          whileInView='show'
          transition={{ delay: 0.27 }}
          className="github "
        >
          <RiGithubFill size={82} className="github-icon icons" />
        </motion.div>
        <motion.div
           variants={variants}
           initial='hidden'
           whileInView='show'
          transition={{ delay: 0.3 }}
          className="twitter "
        > 
          <RiTwitterXFill size={82} className="twitter-icon icons" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
