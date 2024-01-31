"use client";
import React, { useEffect, useRef } from "react";
import "./contact.css";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import ContactForm from "./ContactFOrm/ContactForm";

const Contact = () => {
  const Text = "LET'S TALK ABOUT YOUR PROJECT".split(" ");
  return (
    <motion.div className="contact-container">
      <div className="contact-quote">
        <motion.h1 transition={{ staggerChildren: 0.2 }}>
          {Text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
