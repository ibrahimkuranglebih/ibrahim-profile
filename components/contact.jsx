import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div 
    data-aos='fade-up' data-aos-duration='700'
    className="w-full bg-white border-2 border-gray-200 rounded-2xl flex flex-col p-6 gap-4 max-[1100px]:h-80 hover:shadow-md duration-150">
        <h3 className="text-lg font-semibold text-neutral-900 p-2 border-2 border-gray-200 w-fit rounded-xl">
            Contact Me
        </h3>

          {/* Description */}
        <p className="mt-1 text-sm text-neutral-500">
            Feel free to reach out to me via any of the platforms below.
        </p>
        <div className=" flex flex-row gap-2 justify-center items-center ">
            <a href="https://www.linkedin.com/in/ibrahimmumtaz/" target='blank' className="border-2 border-gray-200 rounded-xl px-4 py-2 h-fit w-fit hover:bg-black hover:shadow-md hover:text-white duration-300 hover:px-8 bg-gray-50 text-3xl"><FaLinkedin/></a>
            <a href="https://github.com/ibrahimkuranglebih" target='blank' className="border-2 border-gray-200 rounded-xl px-4 py-2 h-fit w-fit hover:bg-black hover:shadow-md hover:text-white duration-300 hover:px-8 bg-gray-50 text-3xl"><FaGithub/></a>
            <a href="" target='blank' className="border-2 border-gray-200 rounded-xl px-4 py-2 h-fit w-fit hover:bg-black hover:shadow-md hover:text-white duration-300 hover:px-8 bg-gray-50 text-3xl"><SiGmail/></a>
        </div>
    </div>
  )
}

export default Contact