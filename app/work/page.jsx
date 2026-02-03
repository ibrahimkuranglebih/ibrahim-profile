"use client"
import React from 'react'
import { ArrowLeft, SquareArrowOutUpRight  } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Work = () => {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, [])
  function goBack(e) {
    e.preventDefault();
    router.back();
  }

  const projectsData = [
    {
      title : "ELT Football Data Pipeline",
      image : "/images/Football Data Pipeline Architecture.jpg",
      descriptions : "Automated ELT data pipeline with real time football data including matches, players, macthes, and ",
      skill : ["Docker", "Apache Airflow", "DBT", "PostgreSQL", "Python"],
      link : "https://github.com/ibrahimkuranglebih/Football-Data-Pipeline-12-Leagues.git"
    },
    {
      title : "E-Commerce Analysis Dashboard",
      image : "/images/e-commerce(1).png",
      descriptions : "This is descriptions",
      skill : ["Streamlit", "Python", "Excel", "Pandas", "Numpy"],
      link : "https://github.com/ibrahimkuranglebih/Football-Data-Pipeline-12-Leagues.git"
    },
    {
      title : "BSW Car Detection",
      image : "/images/Football Data Pipeline Architecture.jpg",
      descriptions : "This is descriptions",
      skill : ["Data Modelling", "Microsoft Server SQL"],
      link : "https://github.com/ibrahimkuranglebih/Football-Data-Pipeline-12-Leagues.git"
    },
  ]
  
  return (
    <div className="flex flex-col px-10 py-6 lg:px-28 lh:py-12">
      <div className="relative w-full h-24 flex items-center">
        {/* Background silhouette */}
        <h1 data-aos="fade-right" data-aos-duration="1200" className="absolute text-5xl md:text-7xl font-extrabold tracking-widest text-gray-300 opacity-40 select-none pointer-events-none">
          FEATURED PROJECTS
        </h1>

        {/* Foreground */}
        <div className="relative z-10 flex items-center gap-3">
          <button
            onClick={goBack}
            className="group flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 hover:bg-black hover:text-white hover:border-white transition cursor-pointer"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-[3px]"
            />
          </button>

          <h2 className="text-xl md:text-4xl font-bold text-black">
            Featured Projects
          </h2>
        </div>
      </div>

      {/**/}
      <div className='flex justify-center mt-14'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 justify-center'>
          {projectsData.map((data, index) => (
            <div key={index} className='flex flex-col gap-3 shadow-lg border-2 border-gray-200 w-100 p-6 rounded-xl'>
              <Image src={data.image} alt={data.title} width={480} height={270} className='object-cover rounded-lg border-2 border-gray-300'/>
              <p className='text-xl font-bold'>{data.title}</p>
              <p className='text-md text-gray-600'>{data.descriptions}</p>
              <a href={data.link} className='p-2 rounded-full border-2 border-gray-300 hover:bg-black hover:border-white hover:text-white w-fit duration-150'><SquareArrowOutUpRight size={18}/></a>
              <div className="flex flex-wrap gap-2">
                {data.skill.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full border-2 border-gray-300 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work