"use client";
import Hero from "@/components/HeroSection/Hero";
import Skill from "@/components/Skill/Skill";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contacts/Contact";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp : 0.1,
      duration : 0.5
    });

    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

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
