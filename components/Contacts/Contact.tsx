"use client";
import React, { useEffect, useRef } from "react";
import "./contact.css";
import "./responsive/responsive.css";
import { motion } from "framer-motion";
import ContactForm from "./ContactFOrm/ContactForm";


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
        <div className="contact-forms">
          <ContactForm />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Contact;
