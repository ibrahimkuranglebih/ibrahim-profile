"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CirclePile, HardHat, ChevronsLeftRightEllipsis } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExperienceCard = ({ data }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!data.images || data.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === data.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data.images]);

  return (
    <div className="bg-white shadow-sm rounded-3xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">      
      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-100">
        {data.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={data.title}
            fill
            className={`object-cover absolute transition-opacity duration-700 ${
              index === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2">
        <h3 className="text-md font-bold text-gray-600">{data.title}</h3>
        <h1 className="text-xl font-bold text-gray-800">{data.role}</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          {data.points[0]}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-3">
        <span className="text-sm text-gray-400">{data.period}</span>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactCard = () => (
  <div className="bg-white rounded-3xl px-12 py-10 flex flex-col justify-center shadow-sm h-full">
    <p className="text-3xl mt-4">
        Excited to know more about my experience?
    </p>
    <a
      href="https://wa.me/6282111303192"
      className="mt-6 w-fit px-5 py-2 rounded-full bg-black text-white hover:px-8 font-semibold duration-300"
      target="_blank"
    >
      Contact Me
    </a>
  </div>
);

const Experience = () => {
    const experienceData = [
        {
        title: "Expectik 2024",
        type: "Part Time",
        role : "Mentor of Elysium Team",
        icon: CirclePile,
        period: "September 2024 - November 2024",
        images : [
            "/images/expectik.jpeg",
            "/images/expectik2.jpeg",
        ],
        points: [
            "Lead and guide a team with +30 members",
            "Upgrading chemistry between team members using effective communication",
            "provide technical guidance and support to team members."
        ],
        tags: ["Team Leading", "Communication", "Mentoring"]
        },
        {
        title: "Computer Student Club PNJ",
        type: "Part-time",
        role : "Mentor of Software Development ",
        icon : CirclePile,
        period: "October 2025 - August 2025",
        images : ["/images/csc.jpeg","/images/csc(1).jpeg" ],
        points: [
            "Teaching +30 members of software development division",
            "Guide all members in building final project from 6 teams",
            "Teaching and practicing about software development concepts such as Javascript, ReactJS, and TailwindCSS"
        ],
        tags: ["Javascript", "TailwindCSS", "ReactJS","Communication","Leadership","Prisma ORM"]
        },
        {
        title: "SAUM 2025",
        type: "Part-Time",
        role : "Head Division of Logistics and Operational",
        icon: HardHat ,
        period: "June 2025 — August 2025",
        images : ["/images/saum.JPG", "/images/saum(1).JPG" ],
        points: [
            "Leading and managing logistics and operational division with 8 team members",
            "Helping to plan all needs for event activities",
            "Ensure all events held successfully according to plan"
        ],
        tags: ["Communication", "Leadership", "Event Planning"]
        },
        {
        title: "Yayasan Inspirasi Indonesia Membangun",
        type: "Part-time",
        role : "Web Designer Intern",
        icon : ChevronsLeftRightEllipsis,
        period: "October 2025 - Recent",
        images : ["/images/yiim.png","/images/yiim(2).png"],
        points: [
            "Design and develop website layouts using Wordpress. Import and redesign data structure of contents using XML",
            ""
        ],
        tags: ["Avada", "XML", "Wordpress"]
        }
    ];
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="w-full flex lg:flex-row flex-col min-h-screen py-20 gap-6 mt-10 px-12 lg:px-28 scroll-mt-14" id="experience">
        <div data-aos='fade-right' data-aos-duration='1000'>
          <ContactCard/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-aos='fade-left' data-aos-duration='1000'>
          {experienceData.map((data, index) => (
            <ExperienceCard key={index} data={data} />
          ))}
        </div>
    </section>
  );
};

export default Experience;
