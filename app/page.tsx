"use client";
import Hero from "@/components/HeroSection/Hero";


import Skill from "@/components/Skill/Skill";
import About from "@/components/About/About";
import {  useRef } from "react";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contacts/Contact";

export default function Home() {
  return (
    <section className="mobile-responsive w-full h-full flex flex-col justify-center relative z-40">
      <h1 className="responsive-text hidden  text-[4rem] text-slate-400 ">Sorry! for not reaching to you but this is not responsive for mobile</h1>
      <Hero />
      <Skill />
      <About />
      <Work />
     <Contact />
    </section>
  );
}
