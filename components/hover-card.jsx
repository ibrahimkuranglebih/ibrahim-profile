// components/HoverCard.jsx
"use client";
import { ArrowRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function HoverCard({
  title,
  description,
  icon,
  children,
  className = "",
  href = "",
}) {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div
      data-aos='fade-up' data-aos-duration='700'
      className="w-full group relative rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col justify-between gap-4 max-[1100px]:h-80"
    >
      {/* MAIN CONTENT SECTION */}
      <div
        className="transition-transform duration-300 group-hover:-translate-y-2"
      >
        {/* Icon */}
        {icon && (
          <div className="mb-4 text-neutral-700">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-900 p-2 border-2 border-gray-200 w-fit rounded-xl">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-neutral-500 mt-4">
            {description}
          </p>
        )}

        {/* Custom content */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>

      {/* VIEW SECTION - sekarang jadi bagian dari flow normal */}
      <a
        className="flex w-fit items-center gap-2 text-sm font-medium text-neutral-900 transition-all duration-300 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
        href={href}
      >
        View <ArrowRight size={16} />
      </a>
    </div>
  );
}