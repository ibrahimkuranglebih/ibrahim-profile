"use client";
import Image from "next/image";
import TextType from "@/components/text-type";
import ExperienceCard from "@/components/experience-card";
import MyWorkCard from "@/components/my-work";
import Contact from "@/components/contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function HomePage() {
   useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex flex-col items-start min-h-screen text-black p-12 lg:px-60 lg:pt-20">
      <div className="flex flex-col font-bold gap-1">
        {/* account */}
        <h3 className="text-3xl flex items-center">
          Hi, Im 
          <span className="mx-2">
            <Image src="/images/ibrahim.jpg" alt="" width={50} height={50} className="rounded-lg border-2 border-gray-200"/>
          </span> 
           Ibrahim
        </h3>

        <div className="text-3xl text-gray-500 mt-2 leading-tight flex flex-row items-center gap-3 max-[700px]:items-start max-[700px]:flex-col max-[700px]:gap-3">
          Im a <span className="text-indigo-500 ">
            <TextType
              text={["Data Engineer", "Data analytics", "Software Developer", "Informatics Engineering Student"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
            />
          </span>
        </div>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-full w-fit mt-7 duration-300 hover:px-8 hover:shadow-lg">Download CV</a>
      </div>
      <div className="flex flex-col gap-4 mt-7"  data-aos="fade-up" data-aos-duration="700" >
        <p>An undergraduate Informatics Engineering student with a passion for building solutions from real-world cases into data-driven products. 
          Experienced in developing projects using various tools and programming languages, particularly in data engineering and analytics. 
          Interested in applying data solutions to real-world business and industry cases.
        </p>
      </div>

      <div className="grid grid-cols-3 max-[700px]:grid-cols-1 max-[1100px]:grid-cols-2 gap-6 mt-10 w-full h-fit items-stretch">
        <ExperienceCard />
        <MyWorkCard />
        <Contact />
      </div>
    </div>
  );
}