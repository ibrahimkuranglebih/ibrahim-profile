"use client";
import HoverCard from "./hover-card";
import CardsStack from "./cards-stack";

export default function MyWorkCard() {
  return (
    <HoverCard title="My Work" href="/work" description="My featured projects and collaborations. ">
      <div className="flex flex-col gap-4 justify-center mt-5">
        <CardsStack/>
      </div>
    </HoverCard>
  );
}
