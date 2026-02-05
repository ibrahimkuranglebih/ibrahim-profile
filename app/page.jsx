"use client";
import AboutMe from "@/sections/about-me";
import Aspiration from "@/sections/aspiration";
import Work from "@/sections/work";
import Experience from "@/sections/experience";
import Navbar from "@/components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function HomePage() {
   useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=" text-black lg:py-0 py-16">
      <Navbar/>
      <AboutMe/>
      <Aspiration/>
      <Work/>
      <Experience/>
    </div>
  );
}