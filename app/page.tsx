"use client";
import Hero from "@/components/HeroSection/Hero";
import Skill from "@/components/Skill/Skill";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contacts/Contact";

export default function Home() {
  return (
    <section className="mobile-responsive w-full h-full flex flex-col justify-center relative z-40">
      <Hero />
      <Skill />
      <About />
      <Work />
     <Contact />
    </section>
  );
}
