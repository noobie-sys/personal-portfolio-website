"use client";
import React, { useEffect, useRef } from "react";
import "./contactForm.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { variants } from "../Contact";
import FramerMagneticEffect from "@/utils/framerMagneticEffect";
import { siteConfig } from "@/config/site";
import { onMouseLeave, onMouseOver } from "@/utils/cursorSize";

const ContactForm = () => {
  const mouseRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("#cursor");
    const mouseRef_element = mouseRef.current;
    const resumeRef_element = resumeRef.current;

    if (mouseRef_element && cursor) {
      mouseRef_element.addEventListener("mouseover", () =>
        onMouseOver({ cursor, text: "Click Me" })
      );
      mouseRef_element.addEventListener("mouseleave", () =>
        onMouseLeave({ cursor })
      );
    }
    if (resumeRef_element && cursor) {
      resumeRef_element.addEventListener("mouseover", () =>
        onMouseOver({ cursor, text: "redirect" })
      );
      resumeRef_element.addEventListener("mouseleave", () =>
        onMouseLeave({ cursor })
      );
    }

    return () => {
      if (mouseRef_element && cursor) {
        mouseRef_element.removeEventListener("mouseover", () =>
          onMouseOver({ cursor })
        );
        mouseRef_element.removeEventListener("mouseleave", () =>
          onMouseLeave({ cursor })
        );
      }
      if (resumeRef_element && cursor) {
        resumeRef_element.removeEventListener("mouseover", () =>
          onMouseOver({ cursor, text: "redirect" })
        );
        resumeRef_element.removeEventListener("mouseleave", () =>
          onMouseLeave({ cursor })
        );
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
            <Link href={siteConfig.links.instagram} target="_blank">
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
            <Link href={siteConfig.links.linkedIn} target="_blank">
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
            <Link href={siteConfig.links.github} target="_blank">
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
            <Link href={siteConfig.links.twitter} target="_blank">
              <RiTwitterXFill size={82} className="twitter-icon icons" />
            </Link>
          </motion.div>
        </FramerMagneticEffect>
      </div>
      <div className="mt-12">
        <FramerMagneticEffect>
          <Link
            href={siteConfig.links.resume}
            target="_blank"
            className="text-[3rem] uppercase resume"
            ref={resumeRef}
          >
            Resume
          </Link>
        </FramerMagneticEffect>
      </div>
    </div>
  );
};

export default ContactForm;
