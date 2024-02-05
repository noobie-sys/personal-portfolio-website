"use client";
import React, { useEffect, useRef, useState } from "react";
import "./contactForm.css";
import { Textarea } from "@nextui-org/input";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { variants } from "../Contact";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";

const ContactForm = () => {
  const mouseRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>("#cursor");
    const mouseRef_element = mouseRef.current;

    if (mouseRef_element) {
      mouseRef_element.addEventListener("mouseover", () => {
        if (cursor) {
          cursor.style.width = "100px";
          cursor.style.height = "100px";
          cursor.innerHTML = "<h1>Click Me</h1>";
          cursor.style.transform = "translate(-50% ,-50%)";
        }
      });
      mouseRef_element.addEventListener("mouseleave", () => {
        if (cursor) {
          cursor.style.width = "40px";
          cursor.style.height = "40px";
          cursor.innerHTML = "";
          cursor.style.transform = "translate(0,0)";
        }
      });
    }
    return () => {
      if (mouseRef_element) {
        mouseRef_element.removeEventListener("mouseover", () => {
          if (cursor) {
            cursor.style.width = "100px";
            cursor.style.height = "100px";
            cursor.innerHTML = "<h1>Click Me</h1>";
            cursor.style.transform = "translate(-50%, -50%)";
          }
        });
        mouseRef_element.addEventListener("mouseleave", () => {
          if (cursor) {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.innerHTML = "";
            cursor.style.transform = "translate(0, 0)";
          }
        });
      }
    };
  }, []);
  return (
    <div className="contact-form">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.1 }}
        className="email"
      >
        <Link href={"mailto:amangupta954055@gmail.com"} ref={mouseRef}>
          <FramerMagneticEffect>
            <h1 className="email-id">Email</h1>
          </FramerMagneticEffect>
        </Link>
      </motion.div>
      <div className="social-media-icons">
        <FramerMagneticEffect>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            className="instagram "
          >
            <Link
              href={"https://www.instagram.com/_.noobie__/"}
              target="_blank"
            >
              <CiInstagram size={82} className="instagram-icon icons" />
            </Link>
          </motion.div>
        </FramerMagneticEffect>

        <FramerMagneticEffect>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.24 }}
            className="LinkedIn "
          >
            <Link
              href={"https://www.linkedin.com/in/aman-gupta-382829290/"}
              target="_blank"
            >
              <RiLinkedinBoxFill size={82} className="linkedIn-icon icons" />
            </Link>
          </motion.div>
        </FramerMagneticEffect>
        <FramerMagneticEffect>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.27 }}
            className="github "
          >
            <Link href={"https://github.com/noobie-sys"} target="_blank">
              <RiGithubFill size={82} className="github-icon icons" />
            </Link>
          </motion.div>
        </FramerMagneticEffect>

        <FramerMagneticEffect>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.3 }}
            className="twitter "
          >
            <Link href="https://twitter.com/noobie2103" target="_blank">
              <RiTwitterXFill size={82} className="twitter-icon icons" />
            </Link>
          </motion.div>
        </FramerMagneticEffect>
      </div>
      <div className="mt-12">
        <FramerMagneticEffect>

        <Link href={'https://drive.google.com/file/d/1ZEGa1uu6oEPyE3y_ivmsHpOw_ApWR8Gq/view?usp=drive_link'}
        target="_blank"
        className="text-[3rem] uppercase resume"
        >Resume</Link>
        </FramerMagneticEffect>
      </div>
    </div>
  );
};

export default ContactForm;
