"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineWebAsset } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { BsDatabaseFillGear } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Aspiration = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    AOS.init();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.4, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-12 w-full flex flex-col gap-20 justify-center"
    >
      
      <div className="w-full bg-green-100 p-6 lg:p-10 text-lg lg:text-2xl rounded-3xl font-medium text-gray-800"  data-aos='fade-right' data-aos-duration='700'>
        &apos;&apos;I leverage{" "}
        <span className={`highlight px-2 text-white font-bold ${animate ? "animate" : ""}`}>
          data
        </span>
        as a strategic asset to develop innovations tailored to client needs.
        Through the delivery of tangible, data-driven solutions—including{" "}
        <span className={`highlight px-2 text-white font-bold ${animate ? "animate" : ""}`}>
          data pipelines, analytical dashboards, and software products
        </span>
        —I enable clients to achieve their objectives more efficiently.&apos;&apos;
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 items-start">
        <h2 className="text-4xl font-bold text-gray-800"  data-aos='fade-right' data-aos-duration='1000'>
          How can I help you?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 items-stretch" data-aos='fade-right' data-aos-duration='1100'>
          <div className="h-full bg-white hover:-translate-y-1 transition-all duration-500 ease-out rounded-xl hover:shadow-lg px-8 py-6 flex flex-col gap-4" >
            <div className="flex items-center gap-4 font-bold">
              <div className="p-2 rounded-full bg-gray-200 text-teal-500">
                <IoAnalytics size={30} />
              </div>
              <span className="text-gray-700 text-lg">Data Analytics</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Transforming raw data into actionable insights by processing,
              analyzing, and visualizing data through clean, intuitive, and
              insightful analytical dashboards.
            </p>
          </div>

          <div className="h-full bg-white hover:-translate-y-1 transition-all duration-500 ease-out rounded-xl hover:shadow-lg px-8 py-6 flex flex-col gap-4">
            <div className="flex items-center gap-4 font-bold">
              <div className="p-2 rounded-full bg-gray-200 text-teal-500">
                <BsDatabaseFillGear size={30} />
              </div>
              <span className="text-gray-700 text-lg">Data Engineering</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Designing and building end-to-end ETL/ELT data pipelines using
              modern technologies to support analytics, reporting, and machine
              learning initiatives.
            </p>
          </div>

          <div className="h-full bg-white hover:-translate-y-1 transition-all duration-500 ease-out rounded-xl hover:shadow-lg px-8 py-6 flex flex-col gap-4">
            <div className="flex items-center gap-4 font-bold">
              <div className="p-2 rounded-full bg-gray-200 text-teal-500">
                <MdOutlineWebAsset size={30} />
              </div>
              <span className="text-gray-700 text-lg">Software Development</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Developing scalable and reliable software solutions—from frontend
              to backend—tailored to client requirements while ensuring optimal
              performance and maintainability.
            </p>
          </div>

          <div className="h-full bg-white hover:-translate-y-1 transition-all duration-500 ease-out rounded-xl hover:shadow-lg px-8 py-6 flex flex-col gap-4" >
            <div className="flex items-center gap-4 font-bold">
              <div className="p-2 rounded-full bg-gray-200 text-teal-500">
                <LuBrainCircuit size={30} />
              </div>
              <span className="text-gray-700 text-lg">Machine Learning</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Building and deploying effective machine learning models to solve
              real-world problems, enhance system performance, and support
              data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aspiration