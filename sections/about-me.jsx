import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="min-h-screen w-full py-12 flex flex-col lg:flex-row gap-10 items-center justify-between bg-[#f9fafb]">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-8 max-w-2xl" >
        <span className="w-fit text-sm px-4 py-1 rounded-full bg-teal-100 text-teal-600 font-medium" data-aos='fade-right' data-aos-duration='700'>
          Available for work
        </span>

        <h1 className="text-6xl font-bold leading-tight" data-aos='fade-right' data-aos-duration='800'>
          Hi, I&apos;m <br />
          <span className="text-gray-900">Ibrahim</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-md" data-aos='fade-right' data-aos-duration='900'>
          Undergraduate student with ambition to build business solutions using
          data analytics and software development.
        </p>

        <a
          data-aos='fade-right' data-aos-duration='1000'
          href="#"
          className="w-fit px-6 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transition"
        >
          Download My CV
        </a>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col lg:flex-row items-center gap-10" data-aos='fade-right' duration='800'>
        
        {/* INFO + SOCIAL */}
        <div className="flex flex-col gap-6" data-aos='fade-right' data-aos-duration='1000'>
          {/* INFO CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-6 w-80">
            <p className="font-semibold text-gray-900">
              Ibrahim Mumtaz Samadikun
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Depok, West Java, Indonesia
            </p>
            <p className="text-sm text-gray-500 mt-2">
              6th semester Informatics Engineering Student <span className="font-bold">Politeknik Negeri Jakarta</span>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a className="bg-white p-3 w-fit hover:px-8 rounded-full shadow-sm hover:bg-black hover:text-white duration-300" href="https://www.linkedin.com/in/ibrahimmumtaz/" target="_blank">
              <FaLinkedin size={26} />
            </a>
            <a className="bg-white p-3 w-fit hover:px-8 rounded-full shadow-sm hover:bg-black hover:text-white duration-300" href="https://github.com/ibrahimkuranglebih" target="_blank">
              <FaGithub size={26} />
            </a>
            <a className="bg-white p-3 w-fit hover:px-8 rounded-full shadow-sm hover:bg-black hover:text-white duration-300" href="https://wa.me/6282111303192" target="_blank">
              <FaWhatsapp size={26} />
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="relative w-[280px] h-[280px] rounded-3xl overflow-hidden shadow-md" data-aos='fade-right' data-aos-duration='1100'>
          <Image
            src="/images/ibrahim.jpg"
            alt="Ibrahim"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
