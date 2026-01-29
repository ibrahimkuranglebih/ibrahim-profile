"use client";
import Image from "next/image";
import HoverCard from "./hover-card";
import CardsStack from "./cards-stack";

export default function MyWorkCard() {
  return (
    <HoverCard title="My Work" href="/work">
      <div className="flex gap-4 justify-center mt-5">
        <CardsStack/>
      </div>
    </HoverCard>
  );
}
