"use client";
import Hero from "@/components/Hero Section/Hero";


import Skill from "@/components/Skill/Skill";
import About from "@/components/About/About";
import Line from "@/components/Line_design/Line";
import {  useRef } from "react";
import StickyCursor from "@/components/Cursor/StickyCursor";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <section className=" w-full h-full flex flex-col justify-center">
      <Hero />
      <Skill />
      <About />
      <Line />
      <Work />
    </section>
  );
}
