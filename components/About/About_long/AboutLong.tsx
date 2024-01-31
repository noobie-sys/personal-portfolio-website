import React from "react";
import "@/components/About/about.css";
import Image from "next/image";
import code from "@/public/code2.png";
import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { variants } from "@/components/Contacts/Contact";
import { imageVariants, variantsRight } from "@/utils/animation";
type Props = {};

const AboutLong = (props: Props) => {
  return (
    <div className="about_long_desc">
      <motion.div
        className="sticker coding"
        variants={imageVariants}
        initial="hidden"
        whileInView={"show"}
      >
        <Image
          src={code}
          alt="Code Image"
          width={200}
          height={200}
          className="code-image"
        />
      </motion.div>
      <motion.div
        variants={variantsRight}
        initial="hidden"
        whileInView={"show"}
        className="desc_about_me"
      >
        <h1>
          Hello, I'm <strong>Aman Gupta</strong>, and I have a deep passion for
          web development, software engineering, and all things tech-related. I
          constantly strive to stay abreast of the latest technologies, always
          eager for new learning experiences. Beyond coding, I enjoy{" "}
          <strong>traveling</strong>, indulging in <strong>Coffee</strong>, and
          sometimes <strong>Dancing and Singing</strong>. I appreciate your time
          in reading this, and I'd like to express my gratitude. If you're
          looking for a <strong>dedicated professional</strong>, consider hiring
          me. If you're not convinced yet, feel free to{" "}
          <strong>scroll down</strong> for more about what I bring to the table.{" "}
        </h1>

        <Button
          color="default"
          variant="bordered"
          endContent={<FaArrowRight />}
          className="px-10 py-5 rounded-[4px] "
        >
          Contact me
        </Button>
      </motion.div>
    </div>
  );
};

export default AboutLong;
