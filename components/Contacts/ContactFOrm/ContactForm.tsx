import React from "react";
import "./contactForm.css";
import { Textarea } from "@nextui-org/input";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form className="form-div">
        <div className="heading-div">
          <h1>Contact</h1>
        </div>
        <div className="input-div">
          <div className="name-input">
            <input type="text" className="input-text" required />
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
            <Textarea
              variant={"underlined"}
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
          </div>
          <div className="submit-input">
            <button>Submit</button>
          </div>
        </div>
        <div className="social-media-icons"></div>
      </form>
    </div>
  );
};

export default ContactForm;
