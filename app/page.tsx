import Hero from "@/components/Hero Section/Hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

import face from '@/public/face.jpg'
import Skill from "@/components/Skill/Skill";
import About from "@/components/About/About";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <section className=" w-full h-full">
      <Hero />
	  <Skill />
	  <Divider />
	  <About />
    </section>
  );
}
