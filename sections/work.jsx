"use client";
import React from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const projectsData = [
    {
      title: "ELT Football Data Pipeline",
      image: "/images/Football Data Pipeline Architecture.jpg",
      description:
        "Automated ELT data pipeline leveraging real-time football data across matches, players, and competitions.",
      skill: ["Docker", "Apache Airflow", "DBT", "PostgreSQL", "Python","Linux"],
      year: "2026",
      link: "https://github.com/ibrahimkuranglebih/Football-Data-Pipeline-12-Leagues.git",
    },
    {
      title: "E-Commerce Analysis Dashboard",
      image: "/images/e-commerce(1).png",
      description:
        "Interactive analytical dashboard to uncover insights from e-commerce transaction and customer data.",
      skill: ["Streamlit", "Python", "Pandas", "Numpy"],
      year: "2024",
      link: "https://github.com/ibrahimkuranglebih/Analisa-Penjualan-E-Commerce.git",
    },
    {
      title: "BSW Car Detection",
      image: "/images/bsw.png",
      description:
        "Vehicle detection system for traffic analysis using computer vision and structured data modeling.",
      skill: ["Python", "OpenCV", "YOLOV8m", "Flask"],
      year: "2025",
      link: "",
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col gap-20 mt-20" >
      <h2 className="text-4xl font-bold text-gray-800" data-aos='fade-up' data-aos-duration='800'>
        Featured Works
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos='fade-up' data-aos-duration='1000'>
        {projectsData.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-3xl p-4 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#dfe7df]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>

            <div className="flex flex-col gap-3 px-2">
              <span className="text-xl tracking-widest text-gray-700 font-semibold uppercase">
                {data.title}
              </span>

              <p className="text-sm text-gray-500 leading-relaxed">
                {data.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {data.skill.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center px-2 pt-2">
              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-teal-600 bg-gray-200 hover:bg-teal-400 hover:text-white duration-300 p-3 rounded-full hover:underline"
                >
                  <FaArrowUpRightFromSquare/>
                </a>
              )}
              <span className="text-sm text-gray-400">{data.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
