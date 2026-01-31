"use client";

import React from "react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, CirclePile, HardHat, ChevronsLeftRightEllipsis, ChevronLeft, ChevronRight, X} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Experience () {
  const router = useRouter();
  
  useEffect(() => {
    AOS.init();
  }, [])

  function goBack(e) {
    e.preventDefault();
    router.back();
  }

  const data = [
    {
      title: "Mentor of Expectik 2024",
      type: "Part Time",
      icon: CirclePile,
      period: "September 2024 - November 2024",
      images : [
        "/images/expectik.jpeg",
        "/images/saum.JPG",
        "/images/expectik.jpeg",
      ],
      points: [
        "Lead and guide a team with +30 members",
        "Upgrading chemistry between team members using effective communication",
        "provide technical guidance and support to team members."
      ],
      tags: ["Team Leading", "Communication", "Mentoring"]
    },
    {
      title: "Mentor of Software Development at Computer Student Club PNJ",
      type: "Part-time",
      icon : CirclePile,
      period: "October 2025 - August 2025",
      images : ["/images/expectik.jpeg","/images/saum.JPG" ],
      points: [
        "Teaching +30 members of software development division",
        "Guide all members in building final project from 6 teams",
        "Teaching and practicing about software development concepts such as Javascript, ReactJS, and TailwindCSS"
      ],
      tags: ["Javascript", "TailwindCSS", "ReactJS","Communication","Leadership","Prisma ORM"]
    },
    {
      title: "Head Division of Logistics and Operational at SAUM 2025",
      type: "Part-Time",
      icon: HardHat ,
      period: "June 2025 — August 2025",
      images : ["/images/saum.JPG", "/images/saum.JPG" ],
      points: [
        "Leading and managing logistics and operational division with 8 team members",
        "Helping to plan all needs for event activities",
        "Ensure all events held successfully according to plan"
      ],
      tags: ["Communication", "Leadership", "Event Planning"]
    },
    {
      title: "Web Design Intern at Yayasan Inspirasi Indonesia Membangun",
      type: "Part-time",
      icon : ChevronsLeftRightEllipsis,
      period: "October 2025 - Recent",
      images : ["/images/yiim.png","/images/yiim.png","/images/yiim.png"],
      points: [
        "Design and develop website layouts using Wordpress",
        "Import and redesign data structure of contents using XML"
      ],
      tags: ["Avada", "XML", "Wordpress"]
    }
  ];

  return (
    <div className="flex flex-col px-10 py-6 lg:px-28 lh:py-12">
      {/* header */}
      <div className="relative w-full h-24 flex items-center">
        {/* Background silhouette */}
        <h1 data-aos="fade-right" data-aos-duration="1200" className="absolute text-5xl md:text-7xl font-extrabold tracking-widest text-gray-300 opacity-40 select-none pointer-events-none">
          EXPERIENCE
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
            My Experience
          </h2>
        </div>
      </div>

      <section className="py-16 flex justify-center items-center">
          <div className="w-full max-w-5xl">
            {data.map((item, index) => (
              <Timeline
                key={index}
                item={item}
                isLast={index === data.length - 1}
              />
            ))}
          </div>
      </section>
    </div>
  );
};

const Timeline = ({ item, isLast }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = item.images ?? [];

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div>
      <div className="relative pl-10 pb-6">
        {!isLast && (
          <div className="absolute left-2.5 top-6 h-full w-0.5 bg-gray-200" />
        )}

        {/* Dot */}
        <div className="absolute -left-2 top-6 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
          <item.icon size={16} />
        </div>

        {/* Card */}
        <div className="mt-2 bg-white border-2 border-gray-200 rounded-2xl p-6">
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {item.type} • {item.period}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Image counter */}

              <ChevronDown
                className={`transition-transform duration-300 cursor-pointer ${
                  open ? "rotate-180" : ""
                }`}
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>

          {/* Smooth content */}
          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out will-change-[max-height,opacity]
              ${open ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}
          >
            {/* Image preview */}
            {images.length > 0 && (
              <div
                onClick={() => {
                  setCurrentIndex(0);
                  setShowModal(true);
                }}
                className="relative mt-4 w-full max-w-sm aspect-[3/2] rounded-xl overflow-hidden cursor-pointer hover:shadow-md duration-300"
              >
                <Image
                  src={images[0]}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 duration-300"
                />
              </div>
            )}

            <p className="mt-3 text-sm text-black font-bold">Click Image to View More</p>

            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-5">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border border-gray-300 font-semibold text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl aspect-[3/2] p-4">
            
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 z-30 hover:cursor-pointer right-4 w-12 h-12 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center duration-150"
            >
              <X size={24}/>
            </button>

            {/* Image */}
            <div className="relative w-full h-full aspect-[3/2] bg-white rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/50 border rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300 hover:cursor-pointer"
                >
                 <ChevronLeft size={24}/> 
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/50 border rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300 hover:cursor-pointer"
                >
                 <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

