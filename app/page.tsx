"use client";
import Hero from "@/components/HeroSection/Hero";


import Skill from "@/components/Skill/Skill";
import About from "@/components/About/About";
import {  useRef } from "react";
import Work from "@/components/Work/Work";
import Cards from "@/ui/card";
import Contact from "@/components/Contacts/Contact";

export default function Home() {
  return (
    <section className=" w-full h-full flex flex-col justify-center">
      <Hero />
      <Skill />
      <About />
      <Work />
     <Contact />
    </section>
  );
}
