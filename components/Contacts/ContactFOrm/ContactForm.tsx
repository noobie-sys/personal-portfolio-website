import React from "react";
import "./contactForm.css";
import { Textarea } from "@nextui-org/input";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <form className="form-div">
        <div className="heading-div">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact
          </motion.h1>
        </div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3}}
        className="input-div">
          <div className="name-input">
            <input
              type="text"
              className="input-text"
              placeholder="Name"
              required
            />
          </div>
          <div className="email-input">
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="desc-input">
            <textarea
              name="textarea"
              id="textarea"
              cols={30}
              rows={10}
              placeholder="Describe why are you reaching me out"
            />
          </div>
          <div className="submit-input">
          <Button
              color="default"
              variant="bordered"
              className="px-10 py-5 rounded-[4px] "
            >
              Submit
            </Button>
          </div>
        </motion.div>
        
      </form>
    </div>
  );
};

export default ContactForm;
