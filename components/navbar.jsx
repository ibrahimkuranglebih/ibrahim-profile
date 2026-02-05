"use client";
import React, { useEffect, useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const menuItems = [
    { label: "Profile", href: "#profile" },
    { label: "Assists", href: "#aspiration" },
    { label: "Works", href: "#work" },
    { label: "Experiences", href: "#experience" },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <div
        className="hidden sm:flex w-full fixed z-30 justify-center mt-10"
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-delay="200"
      >
        <div className="flex gap-10 bg-white shadow-lg px-6 py-4 rounded-full">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:bg-gray-300 px-4 py-1 rounded-full duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ===== MOBILE HAMBURGER BUTTON ===== */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden fixed top-6 left-6 z-40 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center"
      >
        <HiMenuAlt2 size={24} />
      </button>

      {/* ===== OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ===== MOBILE SIDEBAR ===== */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-40 transform transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b">
          <button onClick={() => setIsOpen(false)}>
            <HiX size={26} />
          </button>
          <span className="font-semibold text-gray-700">Menu</span>
        </div>

        {/* Menu List */}
        <nav className="flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
