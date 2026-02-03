"use client";
import HoverCard from "./hover-card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ExperienceCard() {

  return (
    <HoverCard
      title="Experience"
      description="My professional experience and roles"
      href="/experience"
    />
  );
}
